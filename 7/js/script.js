var dataJSON = '';
        var output = document.getElementById('output');
        var taskList = document.querySelector('#taskList');
        window.onload = function () {
            if (sessionStorage['task'] != null) {
                dataJSON = JSON.parse(sessionStorage['task']);
            }
            else {
                var data = '[{"info":"Cut the Grass","status":false},{"info":"Clean Room","status":false},{"info":"Go to Gym","status":false},{"info":"Make Dinner","status":false}]';
                dataJSON = JSON.parse(data);
            }
            buildCheckboxes(dataJSON)
        }
        function buildCheckboxes(data) {
            for (var key in data) {
                var status = data[key].status ? '  checked ' : ' ';
                var html = '<li>' + data[key].info + ' <input type="checkbox" value="' + key + '" ' + status + '></li>';
                taskList.innerHTML += html;
            }
            addEvents()
        }
        function addEvents() {
            var checkBoxes = document.querySelectorAll('#taskList input[type="checkbox"]');
            for (var index in checkBoxes) {
                checkBoxes[index].onchange = updateJSON;
            }
        }
        function updateJSON() {
            var key = event.target.value;
            dataJSON[key].status = event.target.checked
        }