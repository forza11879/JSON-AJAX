var dataJSON = '';
var output = document.getElementById('output');
var taskList = document.querySelector('#taskList');
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var tempValue = document.querySelector('input[name="task"]').value;
    addNewItem({
        "info": tempValue
        , "status": false
    })
})
window.onload = function () {
    if (sessionStorage['tasklist'] != null) {
        dataJSON = JSON.parse(sessionStorage['tasklist']);
        buildCheckboxes(dataJSON)
    }
    else {
       var data = '[{"info":"Cut the Grass","status":false},{"info":"Clean Room","status":true},{"info":"Go to Gym","status":false},{"info":"Make Dinner","status":false}]';
   dataJSON = JSON.parse(data);
                buildCheckboxes(dataJSON)
    }
}
function addNewItem(data) {
    addCheckbox(data, dataJSON.length);
    dataJSON.push(data);
    sessionStorage['tasklist'] = JSON.stringify(dataJSON);
}
function addCheckbox(data, key) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input')
    var textInside = document.createTextNode(data.info);
    var span = document.createElement('span');
    span.innerHTML = 'x';
    span.onclick = remove;
    checkbox.type = 'checkbox';
    checkbox.value = key;
    checkbox.checked = data.status;
    checkbox.setAttribute('onchange', 'updateJSON()');
    li.appendChild(textInside);
    li.appendChild(checkbox);
    li.appendChild(span);
    document.querySelector('#taskList').appendChild(li);
}
function remove(event) {
    var index = this.previousElementSibling.value;
    taskList.innerHTML = '';
    dataJSON.splice(index, 1)
    buildCheckboxes(dataJSON)
}
function buildCheckboxes(data) {
    for (var key in data) {
        addCheckbox(data[key], key)
    }
}
function updateJSON() {
    var key = event.target.value;
    dataJSON[key].status = event.target.checked;
    sessionStorage['tasklist'] = JSON.stringify(dataJSON);
}