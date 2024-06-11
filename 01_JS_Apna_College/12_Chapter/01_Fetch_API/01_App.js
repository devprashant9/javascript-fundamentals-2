const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#facts")
const btn = document.querySelector("#btn");


const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response); //JSON Format
  let data = await response.json();
//   console.log(data);
    factPara.innerHTML = data[0].text;
};

btn.addEventListener("click", getFacts);
