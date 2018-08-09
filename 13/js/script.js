var myForm = document.getElementById('myForm')
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //var data = JSON.stringify(formData(myForm));
    loadJSON(formData(myForm))
})
function formData(form) {
    var el = form.querySelectorAll('input[type="text"]');
    var myData = '';
    for (var x = 0; x < el.length; x++) {
        var name = el[x].name;
        var value = el[x].value;
        //myData[name] = value;
        myData += name + '=' + value + '&'
    }
    return myData.slice(0, -1);
}
function loadJSON(data) {
    const url = 'http://s179017901.onlinehome.us/discoveryvip/';
    //'foo=bar&lorem=ipsum'
    console.log(data)
    const myData = data
    fetch(url, {
        method: 'post'
        , headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
        , body: myData
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    }).catch(error => console.log(error))
}