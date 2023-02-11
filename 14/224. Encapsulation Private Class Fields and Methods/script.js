class Account {
    // 1) Public fields (instances)
    locale = navigator.language;
    // 2) Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        
        console.log(`Thanks for opening an account, ${owner}`);
    }
    // 3) Public methods


    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    requestLoan(val) {
        if (this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
        }
    }
    static helper() {
        console.log('Helper');
    }
    // 4) Private methods
    _approveLoan(val) {
        return true;
    }
}
const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);

Account.helper();