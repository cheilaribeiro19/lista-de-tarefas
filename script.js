const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = input.value;
        list.appendChild(newTask);
        input.value = "";
    }
});
