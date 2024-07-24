const addItem = document.querySelector(".addItem");
const item = document.querySelector(".listItem");

let isTaskDone = false;
addItem.addEventListener("click", () => {
  const inputData = document.querySelector(".inputArea").value;
  if (inputData) {
    const listItem = document.createElement("div");
    listItem.innerHTML = `<p class="textInput">${
      inputData[0].toUpperCase() + inputData.slice(1)
    }</p> <p><button class="done">✅</button><button class="cancel">❌</button></p>`;
    listItem.classList.add("item");
    item.prepend(listItem);

    // when task is done
    const done = document.querySelector(".done");
    done.addEventListener("click", () => {
      console.log("Done is clicked");
      const textInput = document.querySelector(".textInput");
      console.log(textInput);
      if (isTaskDone) {
        textInput.classList.add("strikeOf");
        textInput.classList.remove("strikeOn");
        isTaskDone = false;
      } else {
        textInput.classList.add("strikeOn");
        textInput.classList.remove("strikeOf");
        isTaskDone = true;
      }
    });

    // when task is deleted from to do list
    const cancelButton = document.querySelector(".cancel");
    cancelButton.addEventListener("click", () => {
      setTimeout(() => {
        listItem.remove();
      }, 200);
    });
    // Clearing the input item once item is added to ToDo list
    document.querySelector(".inputArea").value = "";
  }
});

// Future features ->
/*
 1. add a icon ❌  to right of added element which can allow us to delete the item list. - done
 2. add a icon ✅ to the right of added element to strike of the task. - done
 3. add search capability to the added list items - (advance but good to know).
 4. add creation date and time to the to do list item ( to display when this item was added).
 5. when button is clicked without any input element, throw error message input field is empty
*/
