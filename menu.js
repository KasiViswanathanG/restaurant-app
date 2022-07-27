// const menu = [{"entree":["french fries", "Peri Peri Fries"]},
//               {"main course":["biriyani", "chicken fried rice"]},
//               {"desserts":["ice cream", "jigardanda"]},
//               {"appetizers":["chicken soup"]},
//               {"beverages":["blue mojito","apple juice"]}
//             ];
const menu = [
  {
    food: "French Fries",
    price: 100.0,
    type: "entree",
    quantity: 1,
  },
  {
    food: "Peri Peri Fries",
    price: 150.0,
    type: "entree",
    quantity: 1,
  },
  {
    food: "Chicken soup",
    price: 150.0,
    type: "appetizers",
    quantity: 1,
  },
  {
    food: "Veg soup",
    price: 100.0,
    type: "enappetizerstree",
    quantity: 1,
  },
  {
    food: "Butter Chicken",
    price: 289.0,
    type: "main course",
    quantity: 1,
  },
  {
    food: "Paneer Butter Masala",
    price: 269.0,
    type: "main course",
    quantity: 1,
  },
  {
    food: "Kadai Chicken",
    price: 289.0,
    type: "main course",
    quantity: 1,
  },
  {
    food: "Kadai Paneer",
    price: 269.0,
    type: "main course",
    quantity: 1,
  },
  {
    food: "Dal Makhani",
    price: 219.0,
    type: "main course",
    quantity: 1,
  },
  {
    food: "Chicken Biryani",
    price: 299.0,
    type: "biryani and rice",
    quantity: 1,
  },
  {
    food: "Mutton Biryani",
    price: 379.0,
    type: "biryani and rice",
    quantity: 1,
  },
  {
    food: "Chicken Tikka Biryani",
    price: 349.0,
    type: "biryani and rice",
    quantity: 1,
  },
  {
    food: "Paneer Tikka Biryani",
    price: 289.0,
    type: "biryani and rice",
    quantity: 1,
  },
  {
    food: "Veg Biryani",
    price: 239.0,
    type: "biryani and rice",
    quantity: 1,
  },
  {
    food: "Chocolate Brownie",
    price: 129.0,
    type: "desserts",
    quantity: 1,
  },
  {
    food: "Angoori Jamun",
    price: 119.0,
    type: "desserts",
    quantity: 1,
  },
  {
    food: "Strawberry Shake",
    price: 100.0,
    type: "milkshakes",
    quantity: 1,
  },
  {
    food: "Chocolate Shake",
    price: 100.0,
    type: "milkshakes",
    quantity: 1,
  },
  {
    food: "Kesar Pista Shake",
    price: 100.0,
    type: "milkshakes",
    quantity: 1,
  },
  {
    food: "Veg Meals",
    price: 150.0,
    type: "meals",
    quantity: 1,
  },
  {
    food: "Non-Veg Meals",
    price: 250.0,
    type: "meals",
    quantity: 1,
  },
  {
    food: "Palak Chole Chawal",
    price: 120.0,
    type: "meals",
    quantity: 1,
  },
  {
    food: "Chole Chawal",
    price: 100.0,
    type: "meals",
    quantity: 1,
  },
  {
    food: "Kachori with Aloo Sabzi",
    price: 60.0,
    type: "meals",
    quantity: 1,
  },
  {
    food: "Kachori with Chole",
    price: 70.0,
    type: "meals",
    quantity: 1,
  },
  {
    food: "Ice cream",
    price: 100.0,
    type: "desserts",
    quantity: 1,
  },
  {
    food: "Jigardanda",
    price: 100.0,
    type: "beverages",
    quantity: 1,
  },
  {
    food: "Sweet Lassi",
    price: 80.0,
    type: "beverages",
    quantity: 1,
  },
  {
    food: "Salted Lassi",
    price: 80.0,
    type: "beverages",
    quantity: 1,
  },
  {
    food: "Cheesy Chicken Tikka",
    price: 339.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Chicken Tikka-Boneless",
    price: 309.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Mutton Seekh Kebab",
    price: 279.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Cheesy Paneer Tikka",
    price: 289.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Crispy Corn",
    price: 189.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Cajun Spice Potatoes",
    price: 189.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "BBQ Chicken Wings",
    price: 289.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Peri Peri Tangdi",
    price: 299.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Tandoori Fish Tikka",
    price: 339.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
  {
    food: "Grilled Prawns-9 Pcs",
    price: 369.0,
    type: "kebabs and tikkas",
    quantity: 1,
  },
];

localStorage.setItem("menu", menu);

const assignfrenchfries = () => {
  incDecFood = "french fries";
};

var data = document.getElementById("data");

// Menu Div
var menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menu");
` `;
data.appendChild(menuDiv);

const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};

var i = 1;
menu.forEach(function (element) {
  // card Div
  var menuCard = document.createElement("div");
  menuCard.setAttribute("id", element.food);
  menuCard.setAttribute("class", "card");
  menuCard.setAttribute("draggable", "true");
  menuCard.setAttribute("ondragstart", "drag(event)");
  menuDiv.appendChild(menuCard);

  var menuItem = document.createElement("div");
  menuItem.setAttribute("id", element.food + "item");
  menuItem.setAttribute("class", "card-body");
  menuCard.appendChild(menuItem);

  var food = document.createElement("h5");
  food.innerHTML = element.food;
  food.setAttribute("id", element.food + "food");
  food.setAttribute("class", "card-title");
  menuItem.appendChild(food);

  var price = document.createElement("p");
  price.setAttribute("class", "card-text");
  price.innerHTML = element.price;
  menuItem.appendChild(price);
});

const searchMenu = (menuSearch) => {
  var data = document.getElementById("menu");
  data.innerHTML = "";
  var menuSearch = document.getElementById("menuSearch").value;
  menu.forEach(function (element) {
    if (
      element.food.toLowerCase().includes(menuSearch.toLowerCase()) ||
      element.type.toLowerCase().includes(menuSearch.toLowerCase())
    ) {
      // card Div
      var menuCard = document.createElement("div");
      menuCard.setAttribute("id", element.food);
      menuCard.setAttribute("class", "card");
      menuCard.setAttribute("draggable", "true");
      menuCard.setAttribute("ondragstart", "drag(event)");
      menuDiv.appendChild(menuCard);

      var menuItem = document.createElement("div");
      menuItem.setAttribute("id", element.food + "item");
      menuItem.setAttribute("class", "card-body");
      menuCard.appendChild(menuItem);

      var food = document.createElement("h5");
      food.innerHTML = element.food;
      food.setAttribute("id", element.food + "food");
      food.setAttribute("class", "card-title");
      menuItem.appendChild(food);

      var price = document.createElement("p");
      price.setAttribute("class", "card-text");
      price.innerHTML = element.price;
      menuItem.appendChild(price);
    }
  });
  document.getElementById("menuHeading").innerHTML = menuSearch;
  if (menuSearch == "") {
    document.getElementById("menuHeading").innerHTML = "Menu";
  }
  var key = window.event.keyCode;
  if (key === 13) {
    document.getElementById("menuSearch").value = "";
  }
};
