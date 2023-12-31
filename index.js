import { fooditem } from "./fooditem";
console.log(fooditem);
function displayItems() {
  var biryani = document.getElementById("biryani");
  var chicken = document.getElementById("chicken");
  var paneer = document.getElementById("paneer");
  var Vegetable = document.getElementById("Vegetable");
  var chinese = document.getElementById("chinese");
  var south_pakistan = document.getElementById("south-pakistan");

  const biryaniData = fooditem.filter((item) => item.category == "biryani");
  console.log(biryaniData);
  const chickenData = fooditem.filter((item) => item.category == "chicken");
  console.log(chickenData);
  const paneerData = fooditem.filter((item) => item.category == "paneer");
  console.log(paneerData);
  const VegetableData = fooditem.filter((item) => item.category == "Vegetable");
  console.log(VegetableData);
  const chineseData = fooditem.filter((item) => item.category == "chinese");
  console.log(chineseData);
  const south_pakistanData = fooditem.filter(
    (item) => item.category == "south-pakistan"
  );
  console.log(south_pakistanData);

  biryaniData.map((item) => {
    var itemcard = document.createElement("div");
    itemcard.setAttribute("id", "item-card");

    var cardTop = document.createElement("div");
    cardTop.setAttribute("id", "card-top");
    //star
    var star = document.createElement("i");
    star.setAttribute("class", "fa fa-star");
    star.setAttribute("id", "rating");
    star.innerText = " " + item.rating;
    // heart
    var heart = document.createElement("i");
    heart.setAttribute("class", "fa-regular fa-heart");
    heart.setAttribute("id", item.id);
    heart.innerText = " " + item.rating;

    cardTop.appendChild(star);
    cardTop.appendChild(heart);
    //img
    var img = document.createElement("img");
    img.src = item.img;
    //name
    var Item_name = document.createElement("p");
    Item_name.setAttribute("id", "item-name");
    Item_name.innerText = item.name;
    //price
    var Item_price = document.createElement("p");
    Item_price.setAttribute("id", "item-price");
    Item_price.innerText = item.price;

    itemcard.appendChild(cardTop);
    itemcard.appendChild(img);
    itemcard.appendChild(Item_name);
    itemcard.appendChild(Item_price);

    biryani.appendChild(itemcard);
  });
}
displayItems();
