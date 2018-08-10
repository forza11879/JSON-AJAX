var load1 = document.querySelector('#load1');
var send1 = document.querySelector('#send1');
var message = document.getElementById('message');
load1.addEventListener('click', function () {
    makeRequest('http://localhost:3000/posts', 'GET', {})
})
send1.addEventListener('click', function () {
    makeRequest('http://localhost:3000/posts', 'POST', 'first=John&last=Jason&company=Whatever&another=helloworld')
})
function makeRequest(url, requestType, data) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            message.innerHTML = xhr.response;
            console.log(JSON.parse(xhr.response))
        }
    }
    xhr.open(requestType, url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(data)
}