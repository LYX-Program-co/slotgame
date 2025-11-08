class SlotMachine {
    constructor() {
        this.canvas = document.getElementById('reel-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.balance = 1000;
        this.bet = 1;
        this.lines = 25;
        this.win = 0;
        this.reels = [[], [], [], [], []]; // 5 reels, each with symbols
        this.symbols = ['100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '300', '301', '302']; // IDs for symbols
        this.symbolWeights = { // For 90% RTP simulation
            '100': 10, '101': 10, '102': 10, '103': 10, '104': 10, '105': 10, '106': 10, '107': 10, '108': 10, '109': 10,
            '300': 2, '301': 1, '302': 2 // Rare specials
        };
        this.rtpTarget = 0.9;
        this.autoSpins = 0;
        this.isSpinning = false;
        this.reelPositions = [0, 0, 0, 0, 0]; // Y offsets for animation
        this.paylines = this.generatePaylines(25); // 25 lines
        this.paytable = { // Simplified paytable
            '100': {3: 10, 4: 50, 5: 200},
            '101': {3: 5, 4: 20, 5: 100},
            // Add more...
            '302': {3: 50, 4: 200, 5: 1000} // Wild
        };
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.loadAssets();
        this.bindEvents();
        this.drawReels();
        document.getElementById('bg-music').play();
        this.checkOrientation();
    }

    resizeCanvas() {
        const aspect = 16/9;
        let width = window.innerWidth;
        let height = window.innerHeight;
        if (width / height > aspect) {
            width = height * aspect;
        } else {
            height = width / aspect;
        }
        this.canvas.width = width;
        this.canvas.height = height;
    }

    loadAssets() {
        // Simulate loading images; in prod, use Image objects
        this.symbolImages = {};
        this.symbols.forEach(id => {
            const img = new Image();
            img.src = `images/symbols/${id}.png`;
            this.symbolImages[id] = img;
        });
        // Load UI, effects, audios similarly
    }

    bindEvents() {
        document.getElementById('spin').addEventListener('click', () => this.spin());
        document.getElementById('bet-plus').addEventListener('click', () => { this.bet++; this.updateUI(); });
        document.getElementById('bet-minus').addEventListener('click', () => { this.bet = Math.max(1, this.bet-1); this.updateUI(); });
        document.getElementById('line-plus').addEventListener('click', () => { this.lines = Math.min(40, this.lines+1); this.paylines = this.generatePaylines(this.lines); this.updateUI(); });
        document.getElementById('line-minus').addEventListener('click', () => { this.lines = Math.max(25, this.lines-1); this.paylines = this.generatePaylines(this.lines); this.updateUI(); });
        document.getElementById('max-bet').addEventListener('click', () => { this.bet = 10; this.lines = 40; this.updateUI(); });
        document.getElementById('auto-spin').addEventListener('click', () => { this.autoSpins = 10; this.spin(); });
        document.getElementById('info').addEventListener('click', () => this.showPaytable());
        // Audio events
        this.spinSound = new Audio('audios/ui/spin.wav');
        this.stopSound = new Audio('audios/ui/stop.wav');
        this.clickSound = new Audio('audios/ui/ui-click.wav');
    }

    checkOrientation() {
        if (window.innerWidth < window.innerHeight) {
            document.getElementById('orientation-prompt').style.display = 'block';
            this.canvas.style.display = 'none';
        } else {
            document.getElementById('orientation-prompt').style.display = 'none';
            this.canvas.style.display = 'block';
        }
        window.addEventListener('orientationchange', () => setTimeout(() => this.checkOrientation(), 1000));
    }

    generatePaylines(num) {
        // Simplified: straight lines
        const lines = [];
        for (let i = 0; i < num; i++) {
            lines.push(Array(5).fill(1)); // Middle line; vary for diagonals
        }
        return lines;
    }

    updateUI() {
        document.getElementById('balance').textContent = `Balance: ${this.balance}`;
        document.getElementById('win').textContent = `Win: ${this.win}`;
        // Update displays with images/text
    }

    generateReels() {
        this.reels = this.reels.map(() => {
            const reel = [];
            for (let i = 0; i < 10; i++) { // 10 symbols per reel for animation
                const rand = Math.random() * 100;
                let cumulative = 0;
                let selected = '100';
                for (let sym in this.symbolWeights) {
                    cumulative += this.symbolWeights[sym];
                    if (rand <= cumulative) {
                        selected = sym;
                        break;
                    }
                }
                reel.push(selected);
            }
            return reel;
        });
    }

    spin() {
        if (this.isSpinning || this.balance < this.bet * this.lines) return;
        this.isSpinning = true;
        this.balance -= this.bet * this.lines;
        this.spinSound.play();
        this.generateReels();
        this.animateReels();
    }

    animateReels() {
        let reelIndex = 0;
        const spinInterval = setInterval(() => {
            this.reelPositions[reelIndex] += 20; // Speed
            if (this.reelPositions[reelIndex] > 800) { // Stop position
                this.reelPositions[reelIndex] = 0;
                this.stopSound.play();
                this.clickSound.play();
                reelIndex++;
            }
            this.drawReels();
            if (reelIndex >= 5) {
                clearInterval(spinInterval);
                this.calculateWin();
                this.isSpinning = false;
                if (this.autoSpins > 0) {
                    this.autoSpins--;
                    setTimeout(() => this.spin(), 2000);
                }
            }
        }, 100);
    }

    drawReels() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const symWidth = this.canvas.width / 5;
        const symHeight = symWidth; // Square
        const visibleRows = 3;
        this.reels.forEach((reel, reelIdx) => {
            reel.forEach((sym, symIdx) => {
                const y = (symIdx * symHeight - this.reelPositions[reelIdx]) % (10 * symHeight);
                if (y > -symHeight && y < visibleRows * symHeight) {
                    this.ctx.drawImage(this.symbolImages[sym], reelIdx * symWidth, y, symWidth, symHeight);
                }
            });
        });
    }

    calculateWin() {
        let totalWin = 0;
        this.paylines.forEach(line => {
            let matches = 1;
            let sym = this.getSymbol(0, line[0]);
            for (let i = 1; i < 5; i++) {
                const nextSym = this.getSymbol(i, line[i]);
                if (nextSym === sym || nextSym === '302') { // Wild
                    matches++;
                } else break;
            }
            if (matches >= 3) {
                totalWin += this.paytable[sym][matches] * this.bet || 0;
            }
        });
        if (totalWin > 0) {
            this.win = totalWin;
            this.balance += totalWin;
            this.triggerEffect(totalWin > 50 ? 'bigwin' : 'smallwin');
        }
        this.updateUI();
    }

    getSymbol(reelIdx, rowIdx) {
        // Get visible symbol at row (0-2)
        return this.reels[reelIdx][rowIdx + Math.floor(this.reelPositions[reelIdx] / (this.canvas.width / 5)) % 10];
    }

    triggerEffect(type) {
        // Simplified: play audio, show overlay
        if (type === 'bigwin') {
            new Audio('audios/effects/win-big.wav').play();
            // Show 500.png overlay for 7s
            setTimeout(() => {}, 7000);
        } else if (type === 'scatter' && /* 3+ scatters */) {
            new Audio('audios/effects/free-spin.wav').play();
            // Trigger free spins
        }
        // Add shake: this.canvas.style.transform = 'translateX(5px)';
    }

    showPaytable() {
        alert('Paytable: See console for details'); // Modal in prod
        console.table(this.paytable);
    }
}

// Init on load
window.addEventListener('load', () => new SlotMachine());
