const baseurl:string = 'https://dummyjson.com/products'
fetch(baseurl)
.then(res => res.json())
.then(console.log);


const formEl= document.querySelector("form") as HTMLFormElement

formEl.addEventListener("submit", handleform);
async function handleform(event: Event) {
  event.preventDefault();
  console.log("i handleForm");
  const userinput:string = (document.querySelector("input") as HTMLInputElement).value;
  console.log(userinput)
  searchresult(userinput)


}    
async function searchresult(userinput){
let searchurl:string = baseurl + '/search?q=' + userinput
const res= await fetch(searchurl)
const data = await res.json()
const products = data.products
console.log(products)
}
