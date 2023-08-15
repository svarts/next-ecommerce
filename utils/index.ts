const fetch = require('node-fetch');

const url = 'https://mobile-phones1.p.rapidapi.com/v1/api/get-brands?limit=60&page=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'eff6521b57msh545b41e789070e2p1ad930jsnea81126094f3',
        'X-RapidAPI-Host': 'mobile-phones1.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}