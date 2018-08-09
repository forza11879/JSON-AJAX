var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var url = 'https://randomuser.me/api/?results=10';
    axios.get(url)
        .then(function (data) {
            var person = data.data.results[0];
            document.querySelector('input[name="first"]').value = person.name.first
            document.querySelector('input[name="last"]').value = person.name.last
            var html = person.name.first + '  ' + person.name.last;
            document.querySelector('#output').innerHTML = html;
        })
})