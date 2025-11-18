// ==================== 游戏配置 ====================
const CONFIG = {
    symbols: ['龙', '凤', '宝', '竹', '福', '鱼', '币', '7️⃣', '铃', '钱', '星', '礼', '机'],
    reelCount: 5,
    visibleSymbols: 3,
    symbolsPerReel: 20, // 卷轴上的总符号数
    initialBalance: 1000,
    minBet: 1,
    maxBet: 100,
    betStep: 1,
    initialJackpot: 5000,
    jackpotGrowthRate: 0.5,
    freeSpinsMultiplier: 3,
    freeSpinsCount: 10,
    jackpotProbability: 0.02,
    bigWinThreshold: 50,
    spinDuration: 3000, // 基础旋转时间
    reelStopDelay: 300, // 每个卷轴停止延迟
    spinSpeed: 50, // 旋转速度（毫秒）
};

// ==================== 赔付表 (25线) ====================
const PAYTABLE_25 = {
    '龙': { 3: 100, 4: 500, 5: 2000, name: '龙' },
    '凤': { 3: 80, 4: 400, 5: 1500, name: '凤凰' },
    '宝': { 3: 60, 4: 300, 5: 1000, name: '元宝' },
    '竹': { 3: 40, 4: 200, 5: 800, name: '竹节' },
    '福': { 3: 40, 4: 200, 5: 800, name: '福字' },
    '鱼': { 3: 30, 4: 150, 5: 600, name: '锦鲤' },
    '币': { 3: 20, 4: 100, 5: 400, name: '金币' },
    '7️⃣': { 3: 50, 4: 250, 5: 1200, name: '幸运7' },
    '铃': { 3: 25, 4: 125, 5: 500, name: '铃铛' },
    '钱': { 3: 15, 4: 75, 5: 300, name: '美元' },
    '星': { special: 'Wild - 替代任何符号', name: 'Wild' },
    '礼': { special: 'Scatter - 3个触发免费旋转', name: 'Scatter' },
    '机': { special: 'Bonus - 触发奖金游戏', name: 'Bonus' }
};

// ==================== 赔付表 (40线) ====================
// 40线模式赔率稍低
const PAYTABLE_40 = {
    '龙': { 3: 60, 4: 300, 5: 1200, name: '龙' },
    '凤': { 3: 50, 4: 250, 5: 1000, name: '凤凰' },
    '宝': { 3: 40, 4: 200, 5: 600, name: '元宝' },
    '竹': { 3: 25, 4: 120, 5: 500, name: '竹节' },
    '福': { 3: 25, 4: 120, 5: 500, name: '福字' },
    '鱼': { 3: 20, 4: 100, 5: 400, name: '锦鲤' },
    '币': { 3: 15, 4: 75, 5: 250, name: '金币' },
    '7️⃣': { 3: 30, 4: 150, 5: 800, name: '幸运7' },
    '铃': { 3: 15, 4: 80, 5: 300, name: '铃铛' },
    '钱': { 3: 10, 4: 50, 5: 200, name: '美元' },
    '星': { special: 'Wild - 替代任何符号', name: 'Wild' },
    '礼': { special: 'Scatter - 3个触发免费旋转', name: 'Scatter' },
    '机': { special: 'Bonus - 触发奖金游戏', name: 'Bonus' }
};

// 赔付表集合
const PAYTABLES = {
    25: PAYTABLE_25,
    40: PAYTABLE_40
};


// ==================== 中奖线配置 (40条) ====================
const WIN_LINES = [
    // Original 10
    { id: 1, positions: [1, 1, 1, 1, 1], name: '线 1', color: '#FFD700' },
    { id: 2, positions: [0, 0, 0, 0, 0], name: '线 2', color: '#FF6B6B' },
    { id: 3, positions: [2, 2, 2, 2, 2], name: '线 3', color: '#4ECDC4' },
    { id: 4, positions: [0, 1, 2, 1, 0], name: '线 4', color: '#45B7D1' },
    { id: 5, positions: [2, 1, 0, 1, 2], name: '线 5', color: '#96CEB4' },
    { id: 6, positions: [1, 0, 0, 0, 1], name: '线 6', color: '#E74C3C' },
    { id: 7, positions: [1, 2, 2, 2, 1], name: '线 7', color: '#9B59B6' },
    { id: 8, positions: [0, 0, 1, 2, 2], name: '线 8', color: '#F39C12' },
    { id: 9, positions: [2, 2, 1, 0, 0], name: '线 9', color: '#1ABC9C' },
    { id: 10, positions: [1, 0, 1, 2, 1], name: '线 10', color: '#E67E22' },
    // New lines (11-40)
    { id: 11, positions: [0, 1, 0, 1, 0], name: '线 11', color: '#FFD700' },
    { id: 12, positions: [2, 1, 2, 1, 2], name: '线 12', color: '#FF6B6B' },
    { id: 13, positions: [0, 1, 1, 1, 0], name: '线 13', color: '#4ECDC4' },
    { id: 14, positions: [2, 1, 1, 1, 2], name: '线 14', color: '#45B7D1' },
    { id: 15, positions: [0, 0, 1, 0, 0], name: '线 15', color: '#96CEB4' },
    { id: 16, positions: [2, 2, 1, 2, 2], name: '线 16', color: '#E74C3C' },
    { id: 17, positions: [1, 0, 2, 0, 1], name: '线 17', color: '#9B59B6' },
    { id: 18, positions: [1, 2, 0, 2, 1], name: '线 18', color: '#F39C12' },
    { id: 19, positions: [0, 2, 0, 2, 0], name: '线 19', color: '#1ABC9C' },
    { id: 20, positions: [2, 0, 2, 0, 2], name: '线 20', color: '#E67E22' },
    { id: 21, positions: [0, 0, 2, 0, 0], name: '线 21', color: '#FFD700' },
    { id: 22, positions: [2, 2, 0, 2, 2], name: '线 22', color: '#FF6B6B' },
    { id: 23, positions: [1, 1, 0, 1, 1], name: '线 23', color: '#4ECDC4' },
    { id: 24, positions: [1, 1, 2, 1, 1], name: '线 24', color: '#45B7D1' },
    { id: 25, positions: [0, 2, 1, 2, 0], name: '线 25', color: '#96CEB4' },
    { id: 26, positions: [2, 0, 1, 0, 2], name: '线 26', color: '#E74C3C' },
    { id: 27, positions: [0, 1, 2, 2, 2], name: '线 27', color: '#9B59B6' },
    { id: 28, positions: [2, 1, 0, 0, 0], name: '线 28', color: '#F39C12' },
    { id: 29, positions: [0, 2, 1, 0, 0], name: '线 29', color: '#1ABC9C' },
    { id: 30, positions: [2, 0, 1, 2, 2], name: '线 30', color: '#E67E22' },
    { id: 31, positions: [1, 0, 1, 0, 1], name: '线 31', color: '#FFD700' },
    { id: 32, positions: [1, 2, 1, 0, 1], name: '线 32', color: '#FF6B6B' },
    { id: 33, positions: [0, 1, 0, 1, 2], name: '线 33', color: '#4ECDC4' },
    { id: 34, positions: [2, 1, 2, 1, 0], name: '线 34', color: '#45B7D1' },
    { id: 35, positions: [0, 2, 2, 1, 0], name: '线 35', color: '#96CEB4' },
    { id: 36, positions: [2, 0, 0, 1, 2], name: '线 36', color: '#E74C3C' },
    { id: 37, positions: [1, 0, 0, 1, 2], name: '线 37', color: '#9B59B6' },
    { id: 38, positions: [1, 2, 2, 1, 0], name: '线 38', color: '#F39C12' },
    { id: 39, positions: [0, 1, 1, 2, 2], name: '线 39', color: '#1ABC9C' },
    { id: 40, positions: [2, 1, 1, 0, 0], name: '线 40', color: '#E67E22' }
];

// ==================== 游戏状态 ====================
class GameState {
    constructor() {
        this.balance = CONFIG.initialBalance;
        this.bet = CONFIG.minBet;
        this.lines = 25; // 默认25条线
        this.win = 0;
        this.modified = 0;
        this.jackpot = CONFIG.initialJackpot;
        this.freeSpins = 0;
        this.isSpinning = false;
        this.autoplayCount = 0;
        this.isAutoplay = false;
        this.reels = this.initializeReels();
        this.winHistory = [];
        this.roundNumber = 0;
    }

    initializeReels() {
        return Array(CONFIG.reelCount).fill(null).map(() =>
            Array(CONFIG.visibleSymbols).fill(null).map(() =>
                CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)]
            )
        );
    }

    placeBet() {
        const totalBet = this.bet * this.lines;
        if (this.balance >= totalBet) {
            this.balance -= totalBet;
            return true;
        }
        return false;
    }

    addWin(amount) {
        this.win = amount;
        this.balance += amount;
        const totalBet = this.bet * this.lines;
        this.modified += amount - totalBet;
    }

    increaseBet() {
        const newBet = this.bet + CONFIG.betStep;
        if (newBet <= Math.min(CONFIG.maxBet, this.balance / this.lines)) {
            this.bet = newBet;
        }
    }

    decreaseBet() {
        if (this.bet > CONFIG.minBet) {
            this.bet -= CONFIG.betStep;
        }
    }

    setMaxBet() {
        this.bet = Math.min(CONFIG.maxBet, Math.floor(this.balance / this.lines));
    }

    // 切换线数 (25 <-> 40)
    toggleLines() {
        if (this.lines === 25) {
            this.lines = 40;
        } else {
            this.lines = 25;
        }
        // 确保切换后总赌注不超过余额
        if (this.getTotalBet() > this.balance) {
            this.bet = Math.max(CONFIG.minBet, Math.floor(this.balance / this.lines));
        }
    }

    getTotalBet() {
        return this.bet * this.lines;
    }

    addToHistory(result, amount) {
        this.roundNumber++;
        this.winHistory.unshift({
            round: this.roundNumber,
            result: result,
            amount: amount
        });
        if (this.winHistory.length > 10) {
            this.winHistory.pop();
        }
    }
}

// ==================== UI 管理器 ====================
class UIManager {
    constructor() {
        this.elements = {
            balance: document.getElementById('balance-display'),
            bet: document.getElementById('bet-display'),
            lines: document.getElementById('lines-display'),
            totalBet: document.getElementById('total-bet-display'),
            win: document.getElementById('win-display'),
            modified: document.getElementById('modified-display'),
            jackpot: document.getElementById('jackpot-amount'),
            freeSpinsDisplay: document.getElementById('free-spins-display'),
            freeSpinsCount: document.getElementById('free-spins-count'),
            autoplayDisplay: document.getElementById('autoplay-display'),
            autoplayCount: document.getElementById('autoplay-count'),
            winLossBody: document.getElementById('win-loss-body'),
            announcementContent: document.getElementById('announcement-content'),
            reels: document.querySelectorAll('.reel'),
            canvas: document.getElementById('win-lines-canvas'),
            btnSpin: document.getElementById('btn-spin'),
            btnAutoplay: document.getElementById('btn-autoplay'),
            btnStopAutoplay: document.getElementById('btn-stop-autoplay')
        };

        this.ctx = this.elements.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        const container = document.getElementById('reels-container');
        this.elements.canvas.width = container.offsetWidth;
        this.elements.canvas.height = container.offsetHeight;
    }

    updateDisplay(state) {
        this.elements.balance.textContent = state.balance.toFixed(2);
        this.elements.bet.textContent = state.bet.toFixed(2);
        this.elements.lines.textContent = state.lines;
        this.elements.totalBet.textContent = state.getTotalBet().toFixed(2);
        this.elements.win.textContent = state.win.toFixed(2);
        this.elements.modified.textContent = state.modified.toFixed(2);
        this.elements.jackpot.textContent = state.jackpot.toFixed(2);

        if (state.freeSpins > 0) {
            this.elements.freeSpinsDisplay.classList.remove('hidden');
            this.elements.freeSpinsCount.textContent = state.freeSpins;
        } else {
            this.elements.freeSpinsDisplay.classList.add('hidden');
        }

        if (state.isAutoplay && state.autoplayCount > 0) {
            this.elements.autoplayDisplay.classList.remove('hidden');
            this.elements.autoplayCount.textContent = state.autoplayCount;
            this.elements.btnAutoplay.classList.add('hidden');
            this.elements.btnStopAutoplay.classList.remove('hidden');
        } else {
            this.elements.autoplayDisplay.classList.add('hidden');
            this.elements.btnAutoplay.classList.remove('hidden');
            this.elements.btnStopAutoplay.classList.add('hidden');
        }

        // 更新旋转按钮状态
        if (state.isSpinning) {
            this.elements.btnSpin.disabled = true;
            this.elements.btnSpin.textContent = '旋转中...';
        } else {
            this.elements.btnSpin.disabled = false;
            this.elements.btnSpin.textContent = '旋转';
        }
    }

    addAnnouncement(message) {
        const item = document.createElement('div');
        item.className = 'announcement-item';
        item.textContent = message;
        this.elements.announcementContent.insertBefore(
            item,
            this.elements.announcementContent.firstChild
        );

        while (this.elements.announcementContent.children.length > 5) {
            this.elements.announcementContent.removeChild(
                this.elements.announcementContent.lastChild
            );
        }
    }

    updateWinHistory(history) {
        this.elements.winLossBody.innerHTML = '';
        history.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.round}</td>
                <td class="${record.result === '中奖' ? 'result-win' : 'result-lose'}">
                    ${record.result}
                </td>
                <td>${record.amount.toFixed(2)}</td>
            `;
            this.elements.winLossBody.appendChild(row);
        });
    }

    drawWinLines(winningLines) {
        this.ctx.clearRect(0, 0, this.elements.canvas.width, this.elements.canvas.height);
        
        const reelWidth = this.elements.canvas.width / CONFIG.reelCount;
        const symbolHeight = this.elements.canvas.height / CONFIG.visibleSymbols;

        winningLines.forEach((line, index) => {
            this.ctx.strokeStyle = line.color || '#FFD700';
            this.ctx.lineWidth = 5;
            this.ctx.shadowBlur = 12;
            this.ctx.shadowColor = this.ctx.strokeStyle;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';

            this.ctx.beginPath();
            line.positions.forEach((pos, reelIndex) => {
                const x = reelWidth * reelIndex + reelWidth / 2;
                const y = symbolHeight * pos + symbolHeight / 2;
                
                if (reelIndex === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            });
            this.ctx.stroke();
        });
    }

    clearWinLines() {
        this.ctx.clearRect(0, 0, this.elements.canvas.width, this.elements.canvas.height);
    }

    highlightSymbols(positions) {
        document.querySelectorAll('.symbol.highlight').forEach(el => {
            el.classList.remove('highlight');
        });

        positions.forEach(([reelIndex, symbolIndex]) => {
            const reel = this.elements.reels[reelIndex];
            const viewport = reel.querySelector('.reel-viewport');
            const symbols = viewport.querySelectorAll('.symbol');
            if (symbols[symbolIndex]) {
                symbols[symbolIndex].classList.add('highlight');
            }
        });
    }

    showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    }

    hideModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    }
}

// ==================== 卷轴管理器 ====================
class ReelManager {
    constructor(reelElements) {
        this.reels = Array.from(reelElements).map((reelEl, index) => ({
            element: reelEl,
            strip: reelEl.querySelector('.reel-strip'),
            index: index,
            symbols: [],
            currentPosition: 0,
            targetPosition: 0,
            isSpinning: false
        }));
        
        this.symbolHeight = 90; // 与CSS变量一致
        this.initializeReels();
    }

    initializeReels() {
        this.reels.forEach(reel => {
            this.generateReelStrip(reel);
        });
    }

    generateReelStrip(reel) {
        reel.symbols = [];
        reel.strip.innerHTML = '';
        
        // 生成长卷轴
        for (let i = 0; i < CONFIG.symbolsPerReel; i++) {
            const symbol = CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)];
            reel.symbols.push(symbol);
            
            const symbolEl = document.createElement('div');
            symbolEl.className = 'symbol';
            symbolEl.textContent = symbol;
            reel.strip.appendChild(symbolEl);
        }
        
        // 设置初始位置，显示中间3个符号
        reel.currentPosition = 0;
        reel.strip.style.transform = `translateY(${-reel.currentPosition * this.symbolHeight}px)`;
    }

    async spinReel(reel, finalSymbols, delay) {
        return new Promise(resolve => {
            setTimeout(async () => {
                reel.element.classList.add('spinning');
                reel.isSpinning = true;
                
                // 快速旋转一段时间
                const spinTime = CONFIG.spinDuration + (reel.index * CONFIG.reelStopDelay);
                await new Promise(r => setTimeout(r, spinTime));
                
                // 停止并显示最终结果
                reel.element.classList.remove('spinning');
                reel.element.classList.add('stopping');
                
                // 重新生成卷轴，确保最终符号在正确位置
                this.setFinalSymbols(reel, finalSymbols);
                
                setTimeout(() => {
                    reel.element.classList.remove('stopping');
                    reel.isSpinning = false;
                    resolve();
                }, 500);
            }, delay);
        });
    }

    setFinalSymbols(reel, finalSymbols) {
        // 清空并重新生成卷轴
        reel.symbols = [];
        reel.strip.innerHTML = '';
        
        // 添加一些前置符号（用于动画效果）
        for (let i = 0; i < 5; i++) {
            const symbol = CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)];
            reel.symbols.push(symbol);
        }
        
        // 添加最终要显示的符号
        finalSymbols.forEach(s => reel.symbols.push(s));
        
        // 添加一些后置符号
        for (let i = 0; i < 5; i++) {
            const symbol = CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)];
            reel.symbols.push(symbol);
        }
        
        // 渲染所有符号
        reel.symbols.forEach(symbol => {
            const symbolEl = document.createElement('div');
            symbolEl.className = 'symbol';
            symbolEl.textContent = symbol;
            reel.strip.appendChild(symbolEl);
        });
        
        // 计算目标位置（显示最终的3个符号）
        const targetIndex = 5; // 最终符号开始的位置
        reel.strip.style.transform = `translateY(${-targetIndex * this.symbolHeight}px)`;
    }

    getVisibleSymbols() {
        return this.reels.map(reel => {
            // 返回当前可见的3个符号
            const startIndex = 5; // 最终符号的起始位置
            return reel.symbols.slice(startIndex, startIndex + CONFIG.visibleSymbols);
        });
    }
}

// ==================== 游戏引擎 ====================
class GameEngine {
    constructor() {
        this.state = new GameState();
        this.ui = new UIManager();
        this.reelManager = new ReelManager(document.querySelectorAll('.reel'));
        this.initializePaytable(this.state.lines); // 使用默认线数初始化
        this.initializeEventListeners();
        this.ui.updateDisplay(this.state);
        this.startJackpotGrowth();
    }

    initializePaytable(lines) {
        const paytableContent = document.getElementById('paytable-content');
        paytableContent.innerHTML = '';
        
        const currentPaytable = PAYTABLES[lines]; // 获取当前线数对应的赔付表

        Object.entries(currentPaytable).forEach(([symbol, data]) => {
            const item = document.createElement('div');
            item.className = 'paytable-item';
            
            let payoutsHTML = '';
            if (data.special) {
                payoutsHTML = `<div class="paytable-special">${data.special}</div>`;
            } else {
                payoutsHTML = `
                    <div class="paytable-payouts">
                        <div>3连: <strong>${data[3]}x</strong></div>
                        <div>4连: <strong>${data[4]}x</strong></div>
                        <div>5连: <strong>${data[5]}x</strong></div>
                    </div>
                `;
            }

            item.innerHTML = `
                <div class="paytable-symbol">${symbol}</div>
                <div style="font-size: 12px; margin-bottom: 6px;">${data.name}</div>
                ${payoutsHTML}
            `;
            paytableContent.appendChild(item);
        });
    }

    initializeEventListeners() {
        // 线数切换
        document.getElementById('btn-switch-lines').addEventListener('click', () => {
            if (!this.state.isSpinning) {
                this.state.toggleLines();
                this.ui.updateDisplay(this.state);
                this.initializePaytable(this.state.lines); // 切换时更新赔付表
                this.ui.addAnnouncement(`切换到 ${this.state.lines} 线模式`);
            }
        });

        // 押注控制
        document.getElementById('btn-bet-up').addEventListener('click', () => {
            if (!this.state.isSpinning) {
                this.state.increaseBet();
                this.ui.updateDisplay(this.state);
            }
        });

        document.getElementById('btn-bet-down').addEventListener('click', () => {
            if (!this.state.isSpinning) {
                this.state.decreaseBet();
                this.ui.updateDisplay(this.state);
            }
        });

        document.getElementById('btn-max-bet').addEventListener('click', () => {
            if (!this.state.isSpinning) {
                this.state.setMaxBet();
                this.ui.updateDisplay(this.state);
            }
        });

        // 旋转按钮
        document.getElementById('btn-spin').addEventListener('click', () => {
            this.spin();
        });

        // 自动旋转
        document.getElementById('btn-autoplay').addEventListener('click', () => {
            this.ui.showModal('autoplay-overlay');
        });

        document.getElementById('btn-stop-autoplay').addEventListener('click', () => {
            this.stopAutoplay();
        });

        document.querySelectorAll('.autoplay-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const count = parseInt(btn.dataset.count);
                this.startAutoplay(count);
                this.ui.hideModal('autoplay-overlay');
            });
        });

        document.getElementById('btn-cancel-autoplay').addEventListener('click', () => {
            this.ui.hideModal('autoplay-overlay');
        });

        // 赔付表
        document.getElementById('btn-paytable').addEventListener('click', () => {
            this.ui.showModal('paytable-overlay');
        });

        document.getElementById('btn-close-paytable').addEventListener('click', () => {
            this.ui.hideModal('paytable-overlay');
        });

        // 免费旋转
        document.getElementById('btn-start-free-spins').addEventListener('click', () => {
            this.ui.hideModal('free-spins-overlay');
        });

        // Jackpot 关闭
        document.getElementById('btn-close-jackpot').addEventListener('click', () => {
            this.ui.hideModal('jackpot-overlay');
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !this.state.isSpinning) {
                e.preventDefault();
                this.spin();
            }
        });
    }

    startJackpotGrowth() {
        setInterval(() => {
            this.state.jackpot += Math.random() * CONFIG.jackpotGrowthRate;
            this.ui.updateDisplay(this.state);
        }, 1000);
    }

    async spin() {
        if (this.state.isSpinning) return;
        
        if (!this.state.placeBet()) {
            this.ui.addAnnouncement('余额不足！');
            return;
        }

        this.state.isSpinning = true;
        this.state.win = 0;
        this.ui.clearWinLines();
        this.ui.updateDisplay(this.state);

        // 生成最终结果
        const finalReels = this.generateRandomReels();

        // 开始旋转所有卷轴
        const spinPromises = this.reelManager.reels.map((reel, index) => 
            this.reelManager.spinReel(reel, finalReels[index], 0)
        );

        await Promise.all(spinPromises);

        // 获取最终可见符号
        this.state.reels = this.reelManager.getVisibleSymbols();

        // 计算结果
        await this.calculateWin(this.state.reels);

        this.state.isSpinning = false;
        this.ui.updateDisplay(this.state);

        // 自动旋转处理
        if (this.state.isAutoplay && this.state.autoplayCount > 0) {
            this.state.autoplayCount--;
            this.ui.updateDisplay(this.state);
            
            if (this.state.autoplayCount > 0 && this.state.balance >= this.state.bet) {
                setTimeout(() => this.spin(), 500);
            } else {
                this.stopAutoplay();
            }
        }
    }

    generateRandomReels() {
        return Array(CONFIG.reelCount).fill(null).map(() =>
            Array(CONFIG.visibleSymbols).fill(null).map(() =>
                CONFIG.symbols[Math.floor(Math.random() * CONFIG.symbols.length)]
            )
        );
    }

    async calculateWin(reels) {
        let totalWin = 0;
        const winningLines = [];
        const highlightPositions = [];

        // 获取当前赔率表
        const currentPaytable = PAYTABLES[this.state.lines];

        // 只检查已启用的中奖线 (25 或 40)
        const activeLines = WIN_LINES.slice(0, this.state.lines);

        activeLines.forEach(line => {
            const symbols = line.positions.map((pos, reelIndex) => reels[reelIndex][pos]);
            const firstSymbol = symbols[0];
            
            if (firstSymbol === '礼' || firstSymbol === '机') return;

            let matchCount = 1;
            for (let i = 1; i < symbols.length; i++) {
                if (symbols[i] === firstSymbol || symbols[i] === '星') {
                    matchCount++;
                } else {
                    break;
                }
            }

            if (matchCount >= 3 && currentPaytable[firstSymbol] && !currentPaytable[firstSymbol].special) {
                const payout = currentPaytable[firstSymbol][matchCount] || 0;
                if (payout > 0) {
                    totalWin += payout * this.state.bet;
                    winningLines.push(line);
                    
                    for (let i = 0; i < matchCount; i++) {
                        highlightPositions.push([i, line.positions[i]]);
                    }
                }
            }
        });

        // 检查 Scatter
        const scatterCount = reels.flat().filter(s => s === '礼').length;
        if (scatterCount >= 3 && this.state.freeSpins === 0) {
            this.state.freeSpins = CONFIG.freeSpinsCount;
            document.getElementById('free-spins-awarded').textContent = CONFIG.freeSpinsCount;
            this.ui.showModal('free-spins-overlay');
            this.ui.addAnnouncement(`触发 ${CONFIG.freeSpinsCount} 次免费旋转！`);
        }

        // 免费旋转倍数
        if (this.state.freeSpins > 0) {
            totalWin *= CONFIG.freeSpinsMultiplier;
            this.state.freeSpins--;
        }

        this.state.addWin(totalWin);

        // Jackpot 检测
        if (Math.random() < CONFIG.jackpotProbability) {
            const jackpotWin = this.state.jackpot;
            this.state.balance += jackpotWin;
            document.getElementById('jackpot-win-amount').textContent = jackpotWin.toFixed(2);
            this.ui.showModal('jackpot-overlay');
            this.ui.addAnnouncement(`Jackpot: ${jackpotWin.toFixed(2)}！`);
            this.state.jackpot = CONFIG.initialJackpot;
        }

        // 显示结果
        if (totalWin > 0) {
            this.ui.drawWinLines(winningLines);
            this.ui.highlightSymbols(highlightPositions);
            this.ui.addAnnouncement(`中奖 ${totalWin.toFixed(2)}！`);
            this.state.addToHistory('中奖', totalWin);

            if (totalWin >= CONFIG.bigWinThreshold * this.state.bet) {
                await this.showBigWin(totalWin);
            }

            setTimeout(() => {
                this.ui.clearWinLines();
                this.ui.highlightSymbols([]);
            }, 3000);
        } else {
            this.state.addToHistory('未中奖', 0);
        }

        this.ui.updateDisplay(this.state);
        this.ui.updateWinHistory(this.state.winHistory);
    }

    async showBigWin(amount) {
        const overlay = document.getElementById('big-win-overlay');
        document.getElementById('big-win-amount').textContent = amount.toFixed(2);
        overlay.classList.remove('hidden');
        
        await new Promise(resolve => setTimeout(resolve, 2500));
        overlay.classList.add('hidden');
    }

    startAutoplay(count) {
        this.state.autoplayCount = count;
        this.state.isAutoplay = true;
        this.ui.updateDisplay(this.state);
        this.ui.addAnnouncement(`自动旋转 ${count} 次`);
        this.spin();
    }

    stopAutoplay() {
        this.state.isAutoplay = false;
        this.state.autoplayCount = 0;
        this.ui.updateDisplay(this.state);
        this.ui.addAnnouncement('自动旋转已停止');
    }
}

// ==================== 初始化游戏 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 防止页面滚动
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // 防止下拉刷新
    document.addEventListener('touchmove', (e) => {
        if (e.target.closest('#paytable-content, .scrollable-content')) {
            return;
        }
        e.preventDefault();
    }, { passive: false });
    
    const game = new GameEngine();
    console.log('老虎机游戏已启动！');
});