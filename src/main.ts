const baseurl: string = "https://dummyjson.com/products";
fetch(baseurl)
  .then((res) => res.json())
  .then(console.log);

const formEl = document.querySelector("form") as HTMLFormElement;

formEl.addEventListener("submit", handleform);
async function handleform(event: Event) {
  event.preventDefault();
  console.log("i handleForm");
  const userinput: string = (
    document.querySelector("input") as HTMLInputElement
  ).value;
  console.log(userinput);
  searchresult(userinput);
}
async function searchresult(userinput:string) {
  let searchurl: string = baseurl + "/search?q=" + userinput;
  const res = await fetch(searchurl);
  const data = await res.json();
  const products:Product[] = data.products;
  display(products);
}

const showingResultDiv = document.querySelector(
  "#showingResultDiv"
) as HTMLDivElement;

type Product= {
    images: string[],
    title: string,
    description: string,
    rating: number,
    stock: number,
    category: string
}

async function display(products:Product[]){
  showingResultDiv.innerHTML = "";

    for(const product of products)
    {console.log(product)
    const {images, title, description, rating, stock, category} = product

    const imgEl= document.createElement('img')
    const titelEl = document.createElement("h1");
    const descriptionEl = document.createElement("p");
    const ratingEl = document.createElement("p");
    const stockEl = document.createElement("p");
    const categoryEl = document.createElement("p");
    const cartBtn = document.createElement("button");

    imgEl.src = images[0]
    titelEl.innerText = title;
    descriptionEl.innerText = description;
    ratingEl.innerText = rating.toString();

    stockEl.innerText = stock.toString();
    if (stock <= 10) {
      stockEl.innerText = stock + " (VARNING: few left)";
    }

    categoryEl.innerText = category;
    cartBtn.innerText = "add to cart";

    const productbox = document.createElement("div");
    productbox.append(
      imgEl,
        titelEl,
      descriptionEl,
      ratingEl,
      stockEl,
      categoryEl,
      cartBtn
    );
    showingResultDiv.append(productbox)
  } 
}
