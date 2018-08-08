var data = '{"tasks":{"Cut Grass":true,"Clean Room":false,"Go to Gym":true,"Make Dinner":false}}';
var dataJSON = JSON.parse(data);

var output = document.getElementById('output');
var taskList = document.querySelector('#taskList');

for (var key in dataJSON.tasks) {
    // console.log(key)
    // console.log(dataJSON.tasks)
    // console.log(dataJSON.tasks[key])
    var status = !dataJSON.tasks[key] ? ' ' : ' checked ';
    var html = '<li>' + key + ' <input type="checkbox" value="' + key + '" ' + status + '></li>';
    taskList.innerHTML += html;

}
addEvents()
function addEvents() {
    var checkBoxes = document.querySelectorAll('#taskList input[type="checkbox"]');
    for (var index in checkBoxes) {
        checkBoxes[index].onchange = updateJSON;
    }
    console.log(checkBoxes)
}

function updateJSON() {
    var key = event.target.value;
    console.log(key, event.target.checked)
    dataJSON.tasks[key] = event.target.checked
}

console.log(dataJSON)