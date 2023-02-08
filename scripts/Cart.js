let id;
let cartItem = JSON.parse(localStorage.getItem("cartItem"))
//----------Cart  Item  Show--------------------------------------
function showdata(){
  let products = document.getElementById("products-list");
  products.innerHTML = "";

  cartItem.forEach((el, index) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    // card.addEventListener("click", () => {
    //   localStorage.setItem("productDetails", JSON.stringify(el));
    //   window.location.href = "product.html";
    // });

    let Small_card = document.createElement("div");

    let love_btn = document.createElement("button");
    love_btn.setAttribute("class", "heart-back");
    love_btn.innerHTML = `<i class="fa fa-heart-o" aria-hidden="true"></i>`;

    love_btn.addEventListener("click", (el) => {
      love_btn.innerHTML = `<i class="fa fa-heart" aria-hidden="true"></i>`;
    });

    let img_box = document.createElement("div");
    img_box.setAttribute("class", "img-box");

    let img = document.createElement("img");
    img.src = el.image;
    img.id = "pro_image"
    img.loading = "lazy";

    img_box.append(img);
    Small_card.append(love_btn, img_box)

    let title = document.createElement("a");
    title.innerText = el.title;
    title.setAttribute("class", "prod-title");

    //------------hover effect------------------------------
    // card.addEventListener("mouseout", (el) => {
    //   img.src = el.image;
    //   title.style.borderBottom = "1px solid transparent";
    // });

    let rem_div = document.createElement("div")
    let price = document.createElement("p");
    price.innerText = `$${el.dolar.toFixed(2)}`;
    price.setAttribute("class", "prod-price");

    let rem = document.createElement("button");
    rem.innerText = "Remove"
    rem.id = "remove"
    rem.onclick = () => {
      remove(index);
    }
    rem_div.append(price, rem)

    card.append(Small_card, title, rem_div);
    products.append(card);
  })
}
showdata()

//---------------Total Item-----------------------------
function TotalItem(){
  let item = document.getElementById("total");
  item.innerText = cartItem.length;
}
TotalItem()

//--------------Sub-Total--------------------
function SubTotal(){
  
}

//-----------Remove---------------------------
let remove = (id) => {
  cartItem.splice(id, 1);
  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  showdata()
}

// ----------checkout page------------------
function NextPage(){
  window.location.href = "checkout.html"
}
