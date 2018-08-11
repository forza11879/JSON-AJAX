var load1 = document.querySelector('#load1');
var send1 = document.querySelector('#send1');
var message = document.getElementById('message');
var output = document.getElementById('output');
var currentId = 1;

document.querySelector('#next').addEventListener('click', function () {
    currentId++;
    loadPage();
})
document.querySelector('#prev').addEventListener('click', function () {
    currentId--;
    loadPage();
})
document.querySelector('#myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var first = document.querySelector('input[name="first"]').value;
    var last= document.querySelector('input[name="last"]').value;
    var company= document.querySelector('input[name="company"]').value;
    var data = 'first='+first+'&last='+last+'&company='+company;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            message.innerHTML = xhr.response;
            console.log(JSON.parse(xhr.response))
        }
    }
    xhr.open('POST', 'http://localhost:3000/posts', true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(data)
})
document.querySelector('#search').addEventListener('click', function () {})
document.querySelector('#addComment').addEventListener('click', function () {})

function loadPage(){
    output.innerHTML =  ''
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var myObj = JSON.parse(xhr.response);
            for(var key in myObj[0]){
                output.innerHTML  += '<b>'+key+'</b> : '+myObj[0][key] + '<br>';
            }
        }
    }
    xhr.open('GET', 'http://localhost:3000/posts?id='+currentId, true)
    xhr.send()
}

function makeGet(url ) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            message.innerHTML = xhr.response;
            console.log(JSON.parse(xhr.response))
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}
function makePost(url, data) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            message.innerHTML = xhr.response;
            console.log(JSON.parse(xhr.response))
        }
    }
    xhr.open('POST', url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(data)
}
/*
        load1.addEventListener('click', function () {
    makeRequest('http://localhost:3000/posts', 'GET', {})
})
send1.addEventListener('click', function () {
    makeRequest('http://localhost:3000/posts', 'POST', 'first=John&last=Jason&company=Whatever&another=helloworld')
})
*/