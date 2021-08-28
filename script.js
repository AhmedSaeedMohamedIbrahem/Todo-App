//"use strict";
let tasks = [];

const getPriorityName = function (priority) {
  switch (priority) {
    case "1":
      return "High";
    case "2":
      return "Medium";
    case "3":
      return "Low";
    default:
      return "";
  }
};

const deleteTask = function (i) {
  if (!confirm("Are you sure ?")) return;
  tasks.splice(i, 1);
  renderTable();
};
const moveUp = function (i) {
  if (i == 0) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i - 1];
  tasks[i - 1] = oldTask;
  renderTable();
};
const moveDown = function (i) {
  if (i == tasks.length - 1) return;
  const oldTask = tasks[i];
  tasks[i] = tasks[i + 1];
  tasks[i + 1] = oldTask;
  renderTable();
};

const renderTable = function () {
  const tbody = document.querySelector("#tasks_tbody");
  tbody.innerHTML = "";
  tasks.forEach((t, i) => {
    const row = `
        <tr id=${i + 1} >
        <td>${i + 1}</td>
        <td>${t.name}</td>
        <td>${getPriorityName(t.priority)}</td>
        <td>
        ${
          i > 0
            ? `<button class="btn btn-sm btn-secondary" onclick="moveUp(${i})">Up</button>`
            : ``
        }
        ${
          i < tasks.length - 1
            ? `<button class="btn btn-sm btn-secondary" onclick="moveDown(${i})">Down</button>`
            : ``
        }
        </td>
        <td>
        <button class="btn btn-primary btn-sm" id="edit-button" onclick="EditTask(${i})">Edit</button>
        <button class="btn btn-success btn-sm" id="save-button" style="display:none;">Save</button>
        <button class="btn btn-danger btn-sm" id="Cancel-button" style="display:none;">Cancel</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">Delete</button></td>
        </tr>
        `;
    tbody.insertAdjacentHTML("beforeEnd", row);
  });
};
const addTask = function () {
  console.log(this);
  const taskName = document.querySelector("#task_name").value;
  const priority = document.querySelector("#task_priority").value;
  if (taskName !== "" && priority > 0) {
    tasks.push({
      name: taskName,
      priority: priority,
    });
    renderTable();
  }
};
const EditTask = function (i) {
  //if (!confirm("Are you sure you want to save editing?")) return;
let OldTaskName =document.querySelector("#tasks_tbody").children[i].children[1];
let Oldpriority =document.querySelector("#tasks_tbody").children[i].children[2];

let save = document.querySelectorAll("#save-button")[i];
let cancel = document.querySelectorAll("#Cancel-button")[i];

save.style.display = "block";
cancel.style.display = "block";

let editInputName = document.createElement('input');
let editInputPriority = document.createElement('select',);

editInputPriority.setAttribute("id","selectEditPriority")



OldTaskName.append(editInputName);
Oldpriority.append(editInputPriority);


var optionElement = document.createElement("option");
optionElement.setAttribute("value", "1");

var textNode = document.createTextNode("High");
optionElement.appendChild(textNode);

document.getElementById("selectEditPriority").appendChild(optionElement);


var optionElement2 = document.createElement("option");
optionElement2.setAttribute("value", "2");

var textNode2 = document.createTextNode("Medium");
optionElement2.appendChild(textNode2);

document.getElementById("selectEditPriority").appendChild(optionElement2);


var optionElement3 = document.createElement("option");
optionElement3.setAttribute("value", "3");

var textNode3 = document.createTextNode("Low");
optionElement3.appendChild(textNode3);

document.getElementById("selectEditPriority").appendChild(optionElement3);



  document.addEventListener("click", function(event) {

    if(event.target.id == "save-button"){
    OldTaskName.textContent = editInputName.value;
    Oldpriority.textContent = editInputPriority.value;

    tasks.splice(i,1,{
      name:OldTaskName.textContent, priority: Oldpriority.textContent
    })
      renderTable();
    }
  })

};
document.querySelector("#add").addEventListener("click", addTask);

const calcFunction = function() {
  console.log(this);
  console.log(`My name is ${this.name} I'm ${this.age} years old`);
};

//var name = "Test3";
//var age = 22;
//const calcFunction = () => {
//  console.log(this);
//  console.log(`My name is ${this.name} I'm ${this.age} years old`);
//};
const obj = {
  name: "Test",
  age: 35,
  cal: calcFunction,
};

const obj2 = {
  name: "Test2",
  age: 22,
  cal: calcFunction,
};

function thisTest() {
  let obj1 = "Ramy";
  var obj2 = "Ahmed";
  console.log(this);
  const x = () => {
    console.log(this);
  };
  x();
}
