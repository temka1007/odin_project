"use strict";

const input = document.querySelector("#item");
const list = document.querySelector("ul");
const addBtn = document.querySelector(".add-btn");

function createList() {
  const inputText = input.value;
  input.value = "";

  const newItem = document.createElement("li");
  const newItemText = document.createElement("span");
  const deleteBtn = document.createElement("button");

  newItemText.textContent = inputText;
  deleteBtn.textContent = "Delete";

  newItem.appendChild(newItemText);
  newItem.appendChild(deleteBtn);

  list.appendChild(newItem);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(newItem);
  });
}

addBtn.addEventListener("click", createList);
input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    createList();
  }
});
