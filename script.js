const addItem = document.querySelector(".addItem");
const item = document.querySelector(".listItem");

addItem.addEventListener("click", () => {
  const inputData = document.querySelector(".inputArea").value;
  if (inputData) {
    const listItem = document.createElement("div");
    listItem.innerHTML = `${inputData}`;
    listItem.classList.add("item");
    item.prepend(listItem);

    // Clearing the input item once item is added to ToDo list
    document.querySelector(".inputArea").value = "";
  }
});
