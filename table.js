const dragEnter = (event) => {
  if (event.target.id == "Table-1") {
    this.tableData = JSON.parse(sessionStorage.getItem("Table-1"));
  }
  if (event.target.id == "Table-2") {
    this.tableData = JSON.parse(sessionStorage.getItem("Table-2"));
  }
  if (event.target.id == "Table-3") {
    this.tableData = JSON.parse(sessionStorage.getItem("Table-3"));
  }
};

const clicked = (event) => {
  if (event.target.id.includes("Table-1")) {
    this.tableData = JSON.parse(sessionStorage.getItem("Table-1"));
  }
  if (event.target.id.includes("Table-2")) {
    this.tableData = JSON.parse(sessionStorage.getItem("Table-2"));
  }
  if (event.target.id.includes("Table-3")) {
    this.tableData = JSON.parse(sessionStorage.getItem("Table-3"));
  }
};

// Table Items after Drop
const allowDrop = (event) => {
  event.preventDefault();
};

const drop = (event, tableName) => {
  tableItems = document.getElementById(tableName + "items");

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

  event.preventDefault();
  var data = event.dataTransfer.getData("text");

  menu.forEach(function (element) {
    if (element.food == data) {
      var itemPresent = false;
      var currElement = { ...element };
      tableData.items.forEach(function (ele) {
        if (ele.food == data) {
          ele.quantity++;
          currElement = ele;
          itemPresent = true;
        }
      });
      if (!itemPresent) {
        tableData.items.push(currElement);
      }
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
        quantity.setAttribute(
          "id",
          tableData.name + tablefood.food + "quantity"
        );
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

      tableData.total = tableData.total + currElement.price;
      tableTotal = document.getElementById(tableData.name + "total");
      tableTotal.innerHTML = "Rs: " + tableData.total + " | ";
      tableModalFooter = document.getElementById(
        tableData.name + "modal-footer"
      );
      tableModalFooter.innerHTML = "Total Rs: " + tableData.total;
      tableDiv = document.getElementById(tableData.name);
      tableDiv.appendChild(tableTotal);

      tableData.itemsNo++;
      tableItemsNo = document.getElementById(tableData.name + "itemsNo");
      tableItemsNo.innerHTML = "Total items: " + tableData.items.length;
      tableDiv.appendChild(tableItemsNo);
    }
  });
  sessionStorage.setItem(tableData.name, JSON.stringify(tableData));
};

const createTable = (tableName) => {
  // New Table
  var table = {};
  table.name = tableName;
  table.total = 0;
  table.itemsNo = 0;
  var items = [];
  table.items = items;

  // Table to Session
  sessionStorage.setItem(table.name, JSON.stringify(table));

  tableData = JSON.parse(sessionStorage.getItem(table.name));

  var data2 = document.getElementById("data2");

  // card Div
  var tableCard = document.createElement("div");
  tableCard.setAttribute("id", tableData.name + "Card");
  tableCard.setAttribute("class", "card");
  data2.appendChild(tableCard);

  // Table Div
  var tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", tableData.name);
  tableDiv.setAttribute("class", "card-body");
  tableDiv.setAttribute("ondrop", "drop(event,tableData.name)");
  tableDiv.setAttribute("ondragover", "allowDrop(event)");
  tableDiv.setAttribute("ondragenter", "dragEnter(event)");
  tableDiv.setAttribute("onclick", "clicked(event)");
  tableCard.appendChild(tableDiv);

  // Table Name
  var tableName = document.createElement("h5");
  tableName.innerHTML = tableData.name;
  tableName.setAttribute("id", tableData.name + "name");
  tableName.setAttribute("class", "card-title");
  tableDiv.appendChild(tableName);

  // Table Details
  var tableModal = document.createElement("div");
  tableModal.setAttribute("id", tableData.name + "modal");
  tableModal.setAttribute("class", "modal");
  tableDiv.appendChild(tableModal);

  var tableModalContent = document.createElement("div");
  tableModalContent.setAttribute("id", tableData.name + "modal-content");
  tableModalContent.setAttribute("class", "modal-content");
  tableModal.appendChild(tableModalContent);

  var tableModalHeader = document.createElement("div");
  tableModalHeader.setAttribute("id", tableData.name + "modal-header");
  tableModalHeader.setAttribute("class", "modal-header");
  tableModalHeader.innerHTML = tableData.name + " | Order Details";
  tableModalContent.appendChild(tableModalHeader);
  var exit = document.createElement("span");
  exit.innerHTML = "x";
  exit.setAttribute("class", "close");
  exit.setAttribute("id", tableData.name + "exit");
  tableModalHeader.appendChild(exit);

  var tableItems = document.createElement("table");
  tableItems.setAttribute("id", tableData.name + "items");
  tableItems.setAttribute("class", "modal-body");
  tableModalContent.appendChild(tableItems);

  tableItems.style.border = "1px";
  tableItems.style.width = "100%";

  var tableModalFooter = document.createElement("div");
  tableModalFooter.style.display = "flex";
  tableModalFooter.style.justifyContent = "center";
  tableModalFooter.style.alignItems = "center";
  tableModalFooter.setAttribute("id", tableData.name + "modal-footer");
  tableModalFooter.setAttribute("class", "modal-footer");
  tableModalFooter.innerHTML = "Total Rs: " + tableData.total;
  tableModalContent.appendChild(tableModalFooter);

  // Bill
  var tableBillDiv = document.createElement("div");
  tableBillDiv.style.display = "flex";
  tableBillDiv.style.justifyContent = "center";
  tableBillDiv.style.alignItems = "center";
  tableModalContent.appendChild(tableBillDiv);

  var tableBill = document.createElement("button");
  tableBill.setAttribute("class", "btn btn-success");
  tableBill.setAttribute("id", tableData.name + "bill");
  tableBill.innerHTML = "bill";
  tableBillDiv.appendChild(tableBill);

  var tableBillModal = document.createElement("div");
  tableBillModal.setAttribute("id", tableData.name + "modalBill");
  tableBillModal.setAttribute("class", "modal");
  tableDiv.appendChild(tableBillModal);

  var tableBillModalContent = document.createElement("div");
  tableBillModalContent.setAttribute(
    "id",
    tableData.name + "modalBill-content"
  );
  tableBillModalContent.setAttribute("class", "modal-content");
  tableBillModal.appendChild(tableBillModalContent);

  var tableBillModalHeader = document.createElement("div");
  tableBillModalHeader.setAttribute("id", tableData.name + "modalBill-header");
  tableBillModalHeader.setAttribute("class", "modal-header");
  tableBillModalHeader.innerHTML = "Bill";
  tableBillModalContent.appendChild(tableBillModalHeader);
  var exitBill = document.createElement("span");
  exitBill.innerHTML = "x";
  exitBill.setAttribute("class", "close");
  exitBill.setAttribute("id", tableData.name + "exitBill");
  tableBillModalHeader.appendChild(exitBill);

  var tableBillBody = document.createElement("div");
  tableBillBody.setAttribute("id", tableData.name + "modal-body");
  tableBillBody.setAttribute("class", "modal-body");
  tableBillModalContent.appendChild(tableBillBody);

  var tableBillModalFooter = document.createElement("div");
  tableBillModalFooter.style.display = "flex";
  tableBillModalFooter.style.justifyContent = "center";
  tableBillModalFooter.style.alignItems = "center";
  tableBillModalFooter.setAttribute("id", tableData.name + "modalBill-footer");
  tableBillModalFooter.setAttribute("class", "modal-footer");
  tableBillModalContent.appendChild(tableBillModalFooter);

  // Table Items Loop
  tableData.items.forEach(function (element) {
    var food = document.createElement("div");
    food.innerHTML = element.food;
    tableItems.appendChild(food);

    var price = document.createElement("div");
    price.innerHTML = element.price;
    tableItems.appendChild(price);

    var quantity = document.createElement("div");
    quantity.setAttribute("id", tableData.name + element.food + "quantity");
    quantity.innerHTML = element.quantity;
    tableItems.appendChild(quantity);
  });

  // Table Total and Items
  var tableTotalItems = document.createElement("p");
  tableTotalItems.setAttribute("class", "card-text");
  tableDiv.appendChild(tableTotalItems);

  // Table Total
  var tableTotal = document.createElement("span");
  tableTotal.setAttribute("id", tableData.name + "total");
  tableTotal.innerHTML = "Rs: " + table.total + " | ";
  tableTotalItems.appendChild(tableTotal);

  // Table Item No
  var tableItemsNo = document.createElement("span");
  tableItemsNo.setAttribute("id", tableData.name + "itemsNo");
  tableItemsNo.innerHTML = "Total items: " + tableData.items.length;
  tableTotalItems.appendChild(tableItemsNo);

  // Pop up Window (Modal) Table Details Functions
  var modal = document.getElementById(tableData.name + "modal");

  var modalTableName = document.getElementById(tableData.name + "name");
  var modalTableTotal = document.getElementById(tableData.name + "total");
  var modalTableItemsNo = document.getElementById(tableData.name + "itemsNo");

  var span = document.getElementById(tableData.name + "exit");

  modalTableName.onclick = function () {
    modal.style.display = "block";
    modal.style.border = "1px";
    modal.style.width = "125%";
  };
  modalTableTotal.onclick = function () {
    modal.style.display = "block";
    modal.style.border = "1px";
    modal.style.width = "125%";
  };
  modalTableItemsNo.onclick = function () {
    modal.style.display = "block";
    modal.style.border = "1px";
    modal.style.width = "125%";
  };

  span.onclick = function () {
    modal.style.display = "none";
    return;
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    return;
  };

  // Pop up Window (Modal) Bill Functions
  var modal2 = document.getElementById(tableData.name + "modalBill");

  var billbutton = document.getElementById(tableData.name + "bill");

  var span2 = document.getElementById(tableData.name + "exitBill");

  billbutton.onclick = function () {
    var billItems = document.createElement("table");
    billItems.style.border = "1px";
    billItems.style.width = "100%";
    tableBillBody.appendChild(billItems);

    var billHeader = document.createElement("tr");
    billItems.appendChild(billHeader);

    var billSNo = document.createElement("th");
    billSNo.innerHTML = "S.No";
    billHeader.appendChild(billSNo);

    var billFoods = document.createElement("th");
    billFoods.innerHTML = "Items";
    billHeader.appendChild(billFoods);

    var billFoodPrice = document.createElement("th");
    billFoodPrice.innerHTML = "Price";
    billHeader.appendChild(billFoodPrice);

    var billFoodQuantity = document.createElement("th");
    billFoodQuantity.innerHTML = "Quantity";
    billHeader.appendChild(billFoodQuantity);

    var billFoodCost = document.createElement("th");
    billFoodCost.innerHTML = "Cost";
    billHeader.appendChild(billFoodCost);

    var i = 1;
    tableData.items.forEach(function (element) {
      var billItem = document.createElement("tr");
      billItems.appendChild(billItem);

      var billItemSNo = document.createElement("td");
      billItemSNo.innerHTML = i++;
      billItem.appendChild(billItemSNo);

      var billItemFoods = document.createElement("td");
      billItemFoods.innerHTML = element.food;
      billItem.appendChild(billItemFoods);

      var billItemFoodPrice = document.createElement("td");
      billItemFoodPrice.innerHTML = element.price;
      billItem.appendChild(billItemFoodPrice);

      var billItemFoodQuantity = document.createElement("td");
      billItemFoodQuantity.innerHTML = element.quantity;
      billItem.appendChild(billItemFoodQuantity);

      var billItemFoodCost = document.createElement("td");
      billItemFoodCost.innerHTML = element.price * element.quantity;
      billItem.appendChild(billItemFoodCost);
    });

    tableBillModalFooter.innerHTML = "Total Cost Rs: " + tableData.total;

    // reset Table
    sessionStorage.removeItem(table.name);
    sessionStorage.setItem(table.name, JSON.stringify(table));
    tableData = JSON.parse(sessionStorage.getItem(table.name));

    tableTotal.innerHTML = "Rs: " + tableData.total + " | ";
    tableItemsNo.innerHTML = "Total items: " + tableData.items.length;
    tableItems.innerHTML = "";
    tableModalFooter.innerHTML = "Total Rs: " + tableData.total;

    modal.style.display = "none";
    modal2.style.display = "block";
  };

  window.onclick = function (event) {
    if (event.target == modal2) {
      tableBillBody.innerHTML = "";
      modal2.style.display = "none";
    }
  };

  span2.onclick = function () {
    tableBillBody.innerHTML = "";
    modal2.style.display = "none";
  };
};

createTable("Table-1");
createTable("Table-2");
createTable("Table-3");
