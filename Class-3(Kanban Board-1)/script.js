// flags
let addTaskFlag = false;

// Buttons
const addBtn = document.querySelector(".add-btn");


//variables

let modalPriorityColor = 'lightpink'

// Elements

const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector(".textArea-cont");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll('.priority-color')
console.log(allPriorityColors)
// Toggle Modal Open and Close

addBtn.addEventListener("click", function () {
  if (addTaskFlag == false) {
    modalCont.style.display = "flex";
    addTaskFlag = true;
  } else {
    modalCont.style.display = "none";
    addTaskFlag = false;
  }
});

modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    const task = taskArea.value;
    generateTicket(task);
  }
});

function generateTicket(taskParam) {
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color"></div>
            <div class="ticket-id">1234567</div>
            <div class="task-area">${taskParam}</div>
            <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

  mainCont.appendChild(ticketCont);
  modalCont.style.display = 'none'
  addTaskFlag = false;
}
