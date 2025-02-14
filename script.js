const tableBody = document.querySelector("tbody");
const id = document.getElementById("id");
const taskInput = document.getElementById("taskInput");
const hourInput = document.getElementById("hourInput");

function deleteData() {
  const confirm = window.confirm("Are You Sure You Want To Delete?");
  if (confirm) {
    localStorage.clear();
  }
}

function addData() {
  const newRow = document.createElement("tr");
  if (taskInput.value != "" && hourInput.value != "") {
    newRow.innerHTML = `
  <td id="id">${id.innerHTML++}</td>
  <td class="taskCell">
  ${taskInput.value}
  </td>
  <td class="hourCell">${hourInput.value}</td>
  `;
    taskInput.value = "";
    hourInput.value = "";
  } else {
    if ((taskInput.value || hourInput.value) == "") {
      alert("Plase Enter A Task And A Time");
    } else {
      if (taskInput.value == "") {
        alert("Please Enter A Task");
      } else {
        alert("Please Enter A Time");
      }
    }
  }
  tableBody.appendChild(newRow);
}
