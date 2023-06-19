let Addbtn = document.querySelector(".Add-btn");
let Editedbtn = document.querySelector(".Edited-btn");

let employees = [
  //  {id:2,name:"jack",profession:"developer",age:20},
  //  {id:1,name:"john",profession:"admin",age:28}
];

//function generator a unquice id on each employee.
function generatorID() {
  return employees.length + 1;
}

//function create a obj and push to array
function addedEmployee(name, profession, age) {
  // console.log(employe);
  let employe = {
    id: generatorID(),
    name: name,
    profession: profession,
    age: age,
  };

  // console.log(employe);
  employees.push(employe);
  displayemployeData();
  showMessage("Employee Added Succesfully !.", "success");
}

//function showing message on display employe all details filled or not.
function showMessage(messageStr, className) {
  let messageDiv = document.getElementById("message");
  messageDiv.innerText = messageStr;
  messageDiv.className = className;
}
// function update data on UI design.
function displayemployeData() {
  const AddedEmployee_container = document.querySelector(
    ".AddedEmployee-container"
  );
  AddedEmployee_container.innerHTML = "";
  employees.sort((a, b) => a.id - b.id);
  // console.log(employees);
  // console.log(employees);
  // if(check){
  //     employees.pop();
  // }

  employees.forEach((employe) => {
    const updateOnui = document.createElement("div");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const addData = document.createElement("div");
    addData.classList.add("addData");

    button1.innerText = "Delete";
    button1.addEventListener("click", () => deleteEmployee(employe.id));

    button2.innerText = "Edit";
    button2.addEventListener("click", () => EditEmployeeDetails(employe.id));

    updateOnui.classList.add("updateOnUi");
    let innerHTML = `
                            <div class="id">${employe.id}</div>
                            <div class="name">Name: ${employe.name}</div>
                            <div class="profession">Profession: ${employe.profession}</div>
                            <div class="age">age: ${employe.age}</div>`;

    updateOnui.innerHTML = innerHTML;
    addData.append(updateOnui);
    addData.append(button1);
    addData.append(button2);
    AddedEmployee_container.append(addData);
  });
}

//function is working modifiying employee data

function EditEmployeeDetails(id) {
  Addbtn.style.display = "none";
  Editedbtn.style.display = "block";

  // let editEmployee = employees.filter(employe=>employe.id === id);
  let index = -1;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      index = i;
      break;
    }
  }
  let objData = employees[index];

  employees.splice(index, 1);

  // employees = employees.filter(employe=>employe.id !== id);

  let name = document.getElementById("name");
  let profession = document.getElementById("profession");
  let age = document.getElementById("age");

  name.value = objData.name;
  profession.value = objData.profession;
  age.value = objData.age;

  Editedbtn.addEventListener("click", () => edditedEmployee(objData.id));

  displayemployeData();
}

// function
function edditedEmployee(editedId) {
  Addbtn.style.display = "block";
  Editedbtn.style.display = "none";

  let newName = document.getElementById("name").value;
  let newProfession = document.getElementById("profession").value;
  let newAge = document.getElementById("age").value;

  if (
    newName.trim() === "" ||
    newProfession.trim() === "" ||
    newAge.trim() === ""
  ) {
    showMessage("Please fill all the fields", "error");
  } else {
    let newData = {
      id: editedId,
      name: newName,
      profession: newProfession,
      age: newAge,
    };
    employees.push(newData);
    document.getElementById("employeeForm").reset();
  }

  // console.log(employees);
  displayemployeData();
  showMessage("Modifying Successfully !.", "success");
  // console.log(newData);
}

// function is delete the employe
function deleteEmployee(id) {
  employees = employees.filter((employe) => employe.id != id);

  displayemployeData();
}

// listener handle a submit event.
document.getElementById("employeeForm").addEventListener("submit", (e) => {
  e.preventDefault();
});

Addbtn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let profession = document.getElementById("profession").value;
  let age = document.getElementById("age").value;

  if (name.trim() === "" || profession.trim() === "" || age.trim() === "") {
    showMessage("Please fill all the fields", "error");
  } else {
    addedEmployee(name, profession, age);
    document.getElementById("employeeForm").reset();
  }
});
// displayemployeData();


