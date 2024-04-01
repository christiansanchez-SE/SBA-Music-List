//

const body = document.querySelector("body");
const btn = document.getElementById("btn");

function toggleBtn() {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
        body.style.background = "rgb(20, 21, 21)";
        body.style.color = "white";
        body.style.transition = "2s";
    } else {
        body.style.background = "white";
        body.style.color = "rgb(20, 21, 21)";
        body.style.transition = "2s";
    }
}

// This is the logic behind the to-do list

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Add your song!");
    }
    else{
        let li = document.createElement("li");
        li.className = "addList"
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span); 
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
});
