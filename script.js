const addItem = document.querySelector(".addItem");
const item = document.querySelector(".listItem");
const inputArea = document.querySelector(".inputArea");
const progress = document.querySelector("progress");
const percentage = document.querySelector(".percentageRate");

let isTaskDone = false;
let totalTaskCount = 0;
let taskCompleted = 0;
const printDateAndTime = function () {
  return new Intl.DateTimeFormat("en-US").format(new Date());
};

const completionPercentage = function (totalTaskCount, taskCompleted) {
  if (totalTaskCount === 0) {
    progress.value = 0;
    percentage.textContent = `${0}%`;
  } else {
    progress.value = Math.round((taskCompleted / totalTaskCount) * 100);
    percentage.textContent = `${Math.round(
      (taskCompleted / totalTaskCount) * 100
    )}%`;
  }
};

completionPercentage(totalTaskCount, taskCompleted);

const handleClickEvent = function () {
  const inputData = document.querySelector(".inputArea").value;
  if (inputData) {
    totalTaskCount++;
    completionPercentage(totalTaskCount, taskCompleted);
    const listItem = document.createElement("div");
    listItem.innerHTML = `<p class="textInput strikeOf">${
      inputData[0].toUpperCase() + inputData.slice(1)
    }</p> <p> ${printDateAndTime()}<button class="done">✅</button><button class="cancel">❌</button></p>`;
    listItem.classList.add("item");
    item.prepend(listItem);

    // when task is completed
    const textInput = listItem.querySelector(".textInput");
    listItem.querySelector(".done").addEventListener("click", function () {
      textInput.classList.toggle("strikeOn");
      textInput.classList.toggle("strikeOf");
      listItem.classList.toggle("fade");
      if (textInput.classList.contains("strikeOn")) {
        taskCompleted++;
        completionPercentage(totalTaskCount, taskCompleted);
      } else {
        taskCompleted--;
        completionPercentage(totalTaskCount, taskCompleted);
      }
    });

    // when task is deleted from to do list
    const cancelButton = document.querySelector(".cancel");
    cancelButton.addEventListener("click", () => {
      setTimeout(() => {
        listItem.remove();
        if (textInput.classList.contains("strikeOn")) {
          taskCompleted--;
          completionPercentage(totalTaskCount, taskCompleted);
        }
      }, 200);
      totalTaskCount--;
      completionPercentage(totalTaskCount, taskCompleted);
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

// Future features ->
/*
 1. add search capability to the added list items.
 2. when button is clicked without any input element, throw error message input field is empty
 3. Add a support of choosing background image 
 4. Add a button to remove all the added list item

*/

// Feature supported
//  1. add a icon ❌  to right of added element which can allow us to delete the item list.
//  2. add a icon ✅ to the right of added element to strike of the task.
//  3. add creation date to the to do list item ( to display when this item was added).
//  4. Dynamically show the percentage based on task completed - say 35% task completed

// Discarded features
// a simple quote Get things done, one item at a time.
