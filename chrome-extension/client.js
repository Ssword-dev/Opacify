let currentElement = null;


document.addEventListener("mousemove", (event) => {
  currentElement = document.elementFromPoint(event.clientX, event.clientY);
});


function deleteElement() {
  if (currentElement) {
    currentElement.style.display="none";
  }
}


chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "command" && message.name === "delete_element") {
    deleteElement();
  }
});
