'use strict';
//data
const account1 = {
    owner: 'Jonas Schemdtmann',
    movements: '[200, 450, -400, 3000, -650, -130, 70, 1300]',
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: '[5000, 3400, -150, -790, -3210, -1000, 8500, -30]',
    interestRate: 1.5,
    pin: 2222,
}

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: '[200, -200, 340, -300, -20, 50, 400, -460]',
    interestRate: 0.7,
    pin: 3333,
}

const account4 = {
    owner: 'Sarah Smith',
    movements: '[430, 1000, 700, 50, 90]',
    interestRate: 1,
    pin: 4444,
}

const accounts = [account1, account2, account3, account4 ];

//element

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.form__btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferto = document.querySelector('.login__input--to');
const inputTransferAmount = document.querySelector('.login__input--amount');
const inputLoanAmount = document.querySelector('.login__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.login__input--pin');

const displayMovements = function(movements){
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposits' : 'withdrawal';

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}</div>
        </div>
        ` ;

        containerMovements.insertAdjacentHTML
        ('afterbegin', html);

    });
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
    accs.forEach(function (acc){
        acc.username = acc.owner
        .toLowerCase()
        .split('')
        .map(name => name[0])
        .join('');
    });
};
createUsernames(accounts);
// console.log(accounts)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//
const deposits = movements.filter(function(mov, i, arr){
    return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for(const mov of movements) if (mov > 0 ) depositsFor.push(mov);
console.log(depositsFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);