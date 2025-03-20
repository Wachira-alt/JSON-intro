const baseUrl = "https://fakestoreapi.com/products";




function displayText (){
  console.log("Demonstration of Asynchronous js");
}
displayText();

fetchData().then((data) => {
  console.log(data);
})

//async await technique for fetching data
async function fetchData() {
  const rensponse = await fetch(baseUrl);

  const json = await rensponse.json();
  return json;



}