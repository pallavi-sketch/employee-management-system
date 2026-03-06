function addEmployee(){

let name = document.getElementById("empName").value;

if(name === ""){
alert("Enter employee name");
return;
}

let li = document.createElement("li");

let textSpan = document.createElement("span");
textSpan.textContent = name;

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){
li.remove();
};

let editBtn = document.createElement("button");
editBtn.textContent = "Edit";

editBtn.onclick = function(){

let newName = prompt("Modify employee name", textSpan.textContent);

if(newName !== null && newName !== ""){
textSpan.textContent = newName;
}

};

li.appendChild(textSpan);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

document.getElementById("empList").appendChild(li);

document.getElementById("empName").value = "";
}