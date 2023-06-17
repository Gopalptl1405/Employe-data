let employees = [
                //  {id:1,name:"jack",profession:"developer",age:20},
                //  {id:2,name:"john",profession:"admin",age:28}
                ];

//function generator a unquice id on each employee.
function generatorID(){
    return employees.length + 1;
}
//function create a obj and push to array 
function addedEmployee(name, profession, age){
    console.log(name);
    let employe = {
        id: generatorID(),
        name: name,
        profession: profession,
        age: age,
    }
    // console.log(employe);
    employees.push(employe);
    displayemployeData();
    showMessage("Employee Added Succesfully !.","success");
}

//function showing message on display employe all details filled or not.
function showMessage(messageStr,className){
    let messageDiv = document.getElementById('message');
    messageDiv.innerText=messageStr;
    messageDiv.className = className;
}
// function update data on UI design.
function displayemployeData(){
    const AddedEmployee_container = document.querySelector('.AddedEmployee-container');
    AddedEmployee_container.innerHTML = '';
    console.log(employees);
    employees.forEach((employe)=>{
        const updateOnui = document.createElement('div');
        const button = document.createElement('button');
        const addData = document.createElement('div');
        addData.classList.add('addData');
        button.id = "delete-btn";
        button.innerText = "Delete";
        button.addEventListener('click', ()=>deleteEmployee(employe.id));
        updateOnui.classList.add('updateOnUi');
        let innerHTML = `
                            <div class="id">${employe.id}</div>
                            <div class="name">Name: ${employe.name}</div>
                            <div class="profession">Profession: ${employe.profession}</div>
                            <div class="age">age: ${employe.age}</div>`;

        updateOnui.innerHTML = innerHTML;
        addData.append(updateOnui);
        addData.append(button);
        AddedEmployee_container.append(addData);
    })
}

// function is delete the employe 
function deleteEmployee(id){
    // console.log(id);
    employees = employees.filter(employe => employe.id != id);
    // console.log(employees);
   displayemployeData();
}
// listener handle a submit event.
document.getElementById('employeeForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let profession = document.getElementById('profession').value;
    let age = document.getElementById('age').value;

    if(name.trim() ==='' || profession.trim() === '' || age.trim() === ''){
        showMessage('Please fill all the fields', 'error');
    }else{
        addedEmployee(name , profession , age);
        document.getElementById('employeeForm').reset();
    }

})
// displayemployeData();