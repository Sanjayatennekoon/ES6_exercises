const address = {
  street: "",
  city: "",
  country: "",
};

//The problem is we have to repeat "address."
const street = address.street;
const city = address.city;
const country = address.country;

//we can code as below
// const { street, city, country } = address;

//or only what we want
// const { street } = address;

//If we need to change the key name, can do it as below
const { street: st } = address;
