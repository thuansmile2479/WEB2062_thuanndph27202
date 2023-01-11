const checkDogs = function (dogsJulia, dogsKate) {
    const dogsjuliaCorrected = dogsJulia.slice();
    dogsjuliaCorrected.splice(0, 1);
    dogsjuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    const dogs = dogsjuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
        if (dog >= 3){
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);