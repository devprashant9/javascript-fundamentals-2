const base_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

console.log(fromCurrency.value, toCurrency.value);

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");

for (let select of dropdowns) {
  for (let code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if (select.name === "from" && code === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && code === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  if (amountValue === "" || amountValue < 0) {
    amountValue = 1;
  }

  // Create the new URL with query parameters
  const fromCurr = fromCurrency.value;
  const toCurr = toCurrency.value;
  const newURL = `${base_URL}?from=${fromCurr}&to=${toCurr}&amount=${amountValue}`;

//   let rate = 

  console.log(newURL);

  let message = document.querySelector(".msg");
  message.innerText = `${amount} ${fromCurrency} = ${eur.in}`;

  // Fetch data from the new URL (if needed)
  fetch(newURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Handle the API response data
    })
    .catch(error => {
      console.error('Error fetching conversion rate:', error);
    });
});
