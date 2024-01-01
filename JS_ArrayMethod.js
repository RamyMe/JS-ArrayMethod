//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

     // Fetch data from the provided URL
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // Problem 1: Get all countries from Asia continent using Filter function
  const asiaCountries = data.filter(country => country.region === 'Asia');
  console.log('Countries from Asia:', asiaCountries.map(country => country.name.common));

  // Problem 2: Get all countries with a population of less than 2 lakhs using Filter function
  const lowPopulationCountries = data.filter(country => {
    const population = country.population || 0;
    return population < 200000;
  });
  console.log('Countries with population less than 2 lakhs:', lowPopulationCountries.map(country => country.name.common));

  // Problem 3: Print name, capital, and flag using forEach function
  data.forEach(country => {
    const { name, capital, flags } = country;
    console.log(`Name: ${name.common}, Capital: ${capital}, Flag: ${flags?.png}`);
  });

  // Problem 4: Print the total population of countries using reduce function
  const totalPopulation = data.reduce((accumulator, country) => {
    const population = country.population || 0;
    return accumulator + population;
  }, 0);
  console.log('Total population of countries:', totalPopulation);

  // Problem 5: Print the country that uses US dollars as currency
  const countryUsingUSD = data.find(country => {
    const currencies = country.currencies || {};
    const usdCurrency = currencies.USD || {};
    return usdCurrency.name === 'United States dollar';
  });
  console.log('Country using US dollars as currency:', countryUsingUSD?.name.common || 'Not found');
})
.catch(error => {
  console.error('Error fetching data:', error);
});


