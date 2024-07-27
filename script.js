const addItem = document.querySelector(".addItem");
const item = document.querySelector(".listItem");
const inputArea = document.querySelector(".inputArea");
console.log(inputArea);
let isTaskDone = false;
let count = 0;

const handleClickEvent = function () {
  console.log('button is clicked');
  const inputData = document.querySelector(".inputArea").value;
  if (inputData) {
    count++;
    const listItem = document.createElement("div");
    listItem.innerHTML = `<p class="textInput strikeOf">${
      inputData[0].toUpperCase() + inputData.slice(1)
    }</p> <p> ${printDateAndTime()}<button class="done">✅</button><button class="cancel">❌</button></p>`;
    listItem.classList.add("item");
    item.prepend(listItem);

    // when task is completed
    listItem.querySelector(".done").addEventListener("click", function () {
      const textInput = listItem.querySelector(".textInput");
      textInput.classList.toggle("strikeOn");
      textInput.classList.toggle("strikeOf");
      listItem.classList.toggle("fade");
    });

    // when task is deleted from to do list
    const cancelButton = document.querySelector(".cancel");
    cancelButton.addEventListener("click", () => {
      setTimeout(() => {
        listItem.remove();
      }, 200);
      count--;
    });

    // Clearing the input item once item is added to ToDo list
    document.querySelector(".inputArea").value = "";
  }
};

addItem.addEventListener("click", handleClickEvent);
inputArea.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleClickEvent();
  }
});

const printDateAndTime = function () {
  return new Intl.DateTimeFormat("en-US").format(new Date());
};

// Future features ->
/*
 1. add a icon ❌  to right of added element which can allow us to delete the item list. - done
 2. add a icon ✅ to the right of added element to strike of the task. - done
 3. add search capability to the added list items - (advance but good to know).
 4. add creation date and time to the to do list item ( to display when this item was added). - done
 5. when button is clicked without any input element, throw error message input field is empty
 6. To add percentage and progress bar - Initially set to 0% and no progress 
 7. Add some additional peices of data to do list : todays's date, no. of tasks, a simple quote Get things done, one item at a time. 
*/
console.log(count);
