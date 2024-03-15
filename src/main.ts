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
  const products:string = data.products;
//   console.log(products);
  display(products);
}

const showingResultDiv = document.querySelector(
  "#showingResultDiv"
) as HTMLDivElement;

// type arr= [string, string]

async function display(products){
  showingResultDiv.innerHTML = "";
  console.log(products[0].title);

    for(const product of products)
    {console.log(product)
    const img = product.images[0]
    const title = product.title;
    const description = product.description;
    const rating = product.rating;
    const stock = product.stock;
    const category = product.category;

    const imgEl= document.createElement('img')
    const titelEl = document.createElement("h1");
    const descriptionEl = document.createElement("p");
    const ratingEl = document.createElement("p");
    const stockEl = document.createElement("p");
    const categoryEl = document.createElement("p");
    const cartBtn = document.createElement("button");

    imgEl.src = img
    titelEl.innerText = title;
    descriptionEl.innerText = description;
    ratingEl.innerText = rating;

    stockEl.innerText = stock;
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

// function displaysearchedmovie(list) {
//     console.log(list);
//     showingResultsDiv.innerHTML = "";
//     if (list.results.length === 0) {
//       const h1El = document.createElement("h1");
//       h1El.innerText = "None found, check spelling";
//       showingResultsDiv.append(h1El);
//     } else {
//         boxDiv.append(posterImg, titelEl, aboutEl);
//         showingResultsDiv.append(boxDiv);
//       }
//     }
//   }
