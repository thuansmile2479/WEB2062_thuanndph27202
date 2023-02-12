'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if(!response.ok)
        throw new Error(`${errorMsg} (${response.status})`)

        return response.json()
    });
};

// const getCountryData = function (country) {
//     // Country 1
//     getJSON(
//       `https://restcountries.eu/rest/v2/name/${country}`,
//       'Country not found'
//     )
//     .then(response => {
//         console.log(response);

//         if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)

//         return response.json()
//     })
//     .then(data => {
//     renderCountry(data[0]);
//     // const neighbour = data[0].borders[0];
//     const neighbour = 'dfsdfdef';    

//     if (!neighbour) throw new Error('No neighbour found!');
//     // Country 2
//     return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//     );
//     })
//     .then(response => {
//         if(!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return  response.json()
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//     console.error(`${err} 💥💥💥`);
//     renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//     countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
    // Country 1
    getJSON(
        `https://restcountries.eu/rest/v2/name/${country}`,
        'Country not found'
    )
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
        if (!neighbour) throw new Error('No neighbour found!');
        // Country 2
        return getJSON(
            `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
            'Country not found'
        );
    })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
    getCountryData('portugal');
});

getCountryData('australia');
