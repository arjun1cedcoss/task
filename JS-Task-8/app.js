
const container = document.getElementById("container");
let table = document.getElementById("table1");
table.innerHTML = `<th>S.No</th><th>Name</th><th>product</th><th>Quantity</th><th>price</th><th>Action</th>`;

function all_product() {
  for (let i = 0; i < products.length; i++) {

    container.innerHTML += `<div class="header">
         <h3>${products[i].name}</h3>
         <div class="item">
            <img class="img-item" src="${products[i].imgSrc}" alt="">
            </div>
         <div class="price">Rs. ${products[i].price}</div>
         <div class="add-to-cart"><button onclick="add_to_cart(${products[i].id})">add to cart</button></div>
     </div>`;
  }
}
all_product();
let arr_cart = [];

//  adding data in cart 
function add_to_cart(id) {
  let item = products.find((e) => { return e.id == id });

  if (arr_cart.includes(item)) {
    alert("this product already in cart..");
    return;
  }
  else {
    arr_cart.push(item);

  }
  show_cart_product(item);
}
let count = 1;

// dispaly cart product 
function show_cart_product(item) {
   let row=document.createElement("tr");
   row.id="row"+item.id;
   table.classList.remove("hide");
  let data = `<td>${count++}</td><td>${item.name}</td><td><img src="${item.imgSrc}" width="100px">
  </td><td><input type="number" id="cart${item.id}" value="1" min="1" oninput="displayPrice(${item.id},${item.price})"></td>
  <td class="totalPrice total" id="item${item.id}" onchange="totalPrice(${item.id})">${item.price}</td>
  <td><button onclick="remove(${item.id})">Remove</button></td>`;
  row.innerHTML= data;
  table.appendChild(row);
  totalPrice();


}
function displayPrice(id,price) 
{
 let q=document.getElementById(`cart${id}`).value;
 if(q<1)
  q=-q;
  document.getElementById(`item${id}`).innerHTML=+q*price;
 
  totalPrice();

  
}
function totalPrice()
{
  let price=document.getElementsByClassName('totalPrice');
   let total_price=0;
   for(let i=0;i<price.length;i++)
   {
     total_price +=+price[i].innerHTML;
   }
   document.getElementById('total').classList.remove("ht");
   document.getElementById("pay_now").classList.remove("hide");
   document.getElementById('total').innerHTML=`Total Rs. ${total_price}`;
}

function remove(id)
{ 
  arr_cart=arr_cart.filter(e=>{
    return e.id=id;
  });
  if(arr_cart.length==0)
  {
    document.getElementById("thead").classList.add("hide");
    document.getElementById("tfoot").classList.add("hide");
    document.getElementById('row'+id).remove();
  }
  else
  {
    document.getElementById('row'+id).remove();
  }
  totalPrice();
 
 }

 function payNow()
 {
   confirm("Thanks for buying...");
   window.location.reload();
 }


















