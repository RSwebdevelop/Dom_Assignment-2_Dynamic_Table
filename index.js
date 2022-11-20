const table = document.getElementById("table");
const formField = document.querySelector(".info");
let rowId = 1;

formField.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const number = document.getElementById("number");
  const errorText = document.querySelector(".error_text");
  var Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // for Email Validation.
  var Phone = /^\d{10}$/;
  var Name = /\d+$/g;
  if (name.value == "" || email.value == "" || number.value == "") {
    errorText.innerText = "Empty input field(s)";
    setTimeout(() => {
      errorText.innerText = "";
    }, 2000);
  } else {

    const newRow = document.createElement("tr");
    newRow.id = rowId;

    // adding content to each cell
    for (const val of [name, email, number]) {
      const cell = document.createElement("td");
      cell.innerText = val.value;
      newRow.appendChild(cell);
    }

    const button = document.createElement("button");
    button.innerText = "remove";
    button.className = "remove";
    newRow.appendChild(button);
    table.appendChild(newRow);
    rowId++;
    // console.log(rowId);
    name.value = "";
    email.value = "";
    number.value = "";
  }
});

// Removing row
function removeRow() {
  console.log("I will remove this item");
}

table.addEventListener("click", (event) => {
  const parent = document.getElementById("table");
  // newRow.removeChild(event.target);
  parent.removeChild(event.target.parentNode);
});
