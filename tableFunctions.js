var tableData;
var incDecFood;

const setTableData = (tableData) => {
  this.tableData = tableData;
};

const incDecFunc = (tableData, incDecFood, value) => {
  var element;
  tableData.items.forEach(function (ele) {
    if (ele.food == incDecFood) {
      element = ele;
    }
  });

  document.getElementById(
    tableData.name + element.food + "quantity"
  ).innerHTML = value;

  tableData.total = tableData.total - element.price * element.quantity;
  tableData.total = tableData.total + element.price * value;
  document.getElementById(tableData.name + "total").innerHTML =
    "Rs: " + tableData.total + " | ";
  document.getElementById(tableData.name + "modal-footer").innerHTML =
    "Total Rs: " + tableData.total;

  tableData.itemsNo = tableData.items.length;
  document.getElementById(tableData.name + "itemsNo").innerHTML =
    "Total items: " + tableData.itemsNo;

  element.quantity = value;

  sessionStorage.setItem(tableData.name, JSON.stringify(tableData));
};

const cancel = (tableData, value) => {
  var element;
  tableData.items.forEach(function (ele) {
    if (ele.food == value) {
      element = ele;
    }
  });
  var index = tableData.items.indexOf(element);
  tableData.items.splice(index, 1);

  var tableItems = document.getElementById(tableData.name + "items");

  tableItems.innerHTML = "";
  var tableItemsHeader = document.createElement("tr");
  tableItems.appendChild(tableItemsHeader);

  var tableItemsSNo = document.createElement("th");
  tableItemsSNo.innerHTML = "S.No";
  tableItemsHeader.appendChild(tableItemsSNo);

  var tableItemsFoods = document.createElement("th");
  tableItemsFoods.innerHTML = "Items";
  tableItemsHeader.appendChild(tableItemsFoods);

  var tableItemsFoodPrice = document.createElement("th");
  tableItemsFoodPrice.innerHTML = "Price";
  tableItemsHeader.appendChild(tableItemsFoodPrice);

  var tableItemsFoodQuantity = document.createElement("th");
  tableItemsFoodQuantity.innerHTML = "Quantity";
  tableItemsHeader.appendChild(tableItemsFoodQuantity);

  var tableItemsButtons = document.createElement("th");
  tableItemsHeader.appendChild(tableItemsButtons);

  var tableItemsRemove = document.createElement("th");
  tableItemsHeader.appendChild(tableItemsRemove);

  var i = 1;
  tableData.items.forEach(function (tablefood) {
    var tableItem = document.createElement("tr");
    tableItem.style.marginLeft = "10px";
    tableItem.setAttribute("id", tableData.name + tablefood.food);
    tableItem.onclick = () => {
      incDecFood = tablefood.food;
    };
    tableItems.appendChild(tableItem);

    var sno = document.createElement("td");
    sno.innerHTML = i++;
    tableItem.appendChild(sno);

    var food = document.createElement("td");
    food.innerHTML = tablefood.food;
    tableItem.appendChild(food);

    var price = document.createElement("td");
    price.innerHTML = tablefood.price;
    tableItem.appendChild(price);

    var quantity = document.createElement("td");
    quantity.setAttribute("id", tableData.name + tablefood.food + "quantity");
    quantity.innerHTML = tablefood.quantity;
    tableItem.appendChild(quantity);

    var incDec = document.createElement("td");
    tableItem.appendChild(incDec);

    var incDecText = document.createElement("input");
    incDecText.type = "number";
    incDecText.id = tableData.name + tablefood.food + "incDecText";
    incDecText.name = tableData.name + tablefood.food + "incDecText";
    incDecText.min = "1";
    incDecText.value = tablefood.quantity;
    incDecText.setAttribute(
      "oninput",
      "incDecFunc(tableData,incDecFood,value)"
    );
    incDec.appendChild(incDecText);

    var rem = document.createElement("td");
    tableItem.appendChild(rem);
    var remove = document.createElement("button");
    remove.setAttribute("id", tableData.name + tablefood.food + "remove");
    remove.setAttribute("value", tablefood.food);
    remove.setAttribute("onclick", "cancel(tableData,value)");
    remove.innerHTML = "cancel";
    remove.setAttribute("class", "btn btn-danger");
    rem.appendChild(remove);
  });

  tableData.total = tableData.total - element.price * element.quantity;
  document.getElementById(tableData.name + "total").innerHTML =
    "Rs: " + tableData.total + " | ";
  document.getElementById(tableData.name + "modal-footer").innerHTML =
    "Total Rs: " + tableData.total;

  tableData.itemsNo = tableData.items.length;
  document.getElementById(tableData.name + "itemsNo").innerHTML =
    "Total items: " + tableData.itemsNo;

  sessionStorage.setItem(tableData.name, JSON.stringify(tableData));
  setTableData(tableData);
};

const searchTable = (tableSearch) => {
  var tableSearch = document.getElementById("tableSearch").value;
  table1Card = document.getElementById("Table-1" + "Card");
  table2Card = document.getElementById("Table-2" + "Card");
  table3Card = document.getElementById("Table-3" + "Card");
  table1Card.style.display = "none";
  table2Card.style.display = "none";
  table3Card.style.display = "none";
  table1 = JSON.parse(sessionStorage.getItem("Table-1"));
  table2 = JSON.parse(sessionStorage.getItem("Table-2"));
  table3 = JSON.parse(sessionStorage.getItem("Table-3"));
  if (table1.name.toLowerCase().includes(tableSearch.toLowerCase())) {
    table1Card.style.display = "block";
  }
  if (table2.name.toLowerCase().includes(tableSearch.toLowerCase())) {
    table2Card.style.display = "block";
  }
  if (table3.name.toLowerCase().includes(tableSearch.toLowerCase())) {
    table3Card.style.display = "block";
  }
  document.getElementById("tableHeading").innerHTML = tableSearch;
  if (tableSearch == "") {
    document.getElementById("tableHeading").innerHTML = "Tables";
  }
  var key = window.event.keyCode;
  if (key === 13) {
    document.getElementById("tableSearch").value = "";
  }
};
