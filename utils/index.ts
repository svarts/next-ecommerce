export async function fetchPhones() {
    const headers = {
        'X-RapidAPI-Key': 'eff6521b57msh545b41e789070e2p1ad930jsnea81126094f3',
        'X-RapidAPI-Host': 'ecommerce-product-api1.p.rapidapi.com'
    }

    const response = await fetch('https://ecommerce-product-api1.p.rapidapi.com/data?product=phone&page=1', {
        headers: headers,
    });

    const result = await response.json();

    if (result.data && result.data.brands) {
        const brands = result.data.brands;

        for (const brand of brands) {
            console.log(brand);
        }
    } else {
        console.log('No brands found.');
    }
    return result;
}


const fetch = require('node-fetch');

const url = 'https://device-specs1.p.rapidapi.com/laptops';
const options = {
  method: 'GET',
  headers: {
    Authorization: '<REQUIRED>',
    'X-RapidAPI-Key': 'ee35a48e96msh2feab49f111e3ccp10f7cejsn92f758fd4ef9',
    'X-RapidAPI-Host': 'device-specs1.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}