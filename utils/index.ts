export async function fetchPhones() {
    const headers = {
        'X-RapidAPI-Key': 'eff6521b57msh545b41e789070e2p1ad930jsnea81126094f3',
        'X-RapidAPI-Host': 'mobile-phones1.p.rapidapi.com'
    }

    const response = await fetch ('https://mobile-phones1.p.rapidapi.com/v1/api/get-brands?limit=60&page=1', {
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