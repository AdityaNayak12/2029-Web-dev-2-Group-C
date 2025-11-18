// open and close the Modal pop up
let addTaskFlag = false;

// Buttons
const addBtn = document.querySelector(".add-btn");

// Elements

const modalCont = document.querySelector(".modal-cont");
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


