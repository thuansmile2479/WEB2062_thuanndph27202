const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24643983748,
};

const chekIn = function (flightNum, passenger) {
    flightNum = 'LH888';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24643983748) {
        alert('Checked in');
    }else {
        alert('Wrong passport!');
    }
};

// chekIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// is the same ass doing
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
chekIn(flight, jonas);