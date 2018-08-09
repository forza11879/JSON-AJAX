var output = document.getElementById('output');
var buttonClick = document.getElementById('loadNew')
buttonClick.addEventListener('click',function(){
    loadAjax();
})
function loadAjax(){
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function(){
    //console.log('state changed',ajax.readyState,ajax.status)
    if(ajax.readyState == 4 && ajax.status==200){
           // console.log(ajax.responseText)
        var json = JSON.parse(ajax.responseText);
         var data = json.results[0];
 
        var message = '<h2>'+data.name.first + '  ' + data.name.last + '</h2><img src="'+data.picture.large +'">'
       
         output.innerHTML = message;
    }
}
/*
ajax.onprogress =function(){
    console.log('PROGRESS',ajax.readyState,ajax.status)
}
ajax.onload =function(){
    console.log('DONE',ajax.readyState,ajax.status)
}
*/
ajax.open('GET','https://randomuser.me/api/',true)
ajax.send();
}