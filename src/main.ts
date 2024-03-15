const baseurl:string = 'https://dummyjson.com/products'
fetch(baseurl)
.then(res => res.json())
.then(console.log);