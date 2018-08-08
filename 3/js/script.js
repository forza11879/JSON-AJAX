var myObj = {
    "friends": [{
        "firstName": "Mike"
        , "lastName": "Jones"
   },{
        "firstName": "John"
        , "lastName": "Smith"
   } ,{
        "firstName": "Laurence"
        , "lastName": "Svekis"
   },{
        "firstName": "Alice"
        , "lastName": "James"
   }]
}

var users = myObj.friends;
var html = '';
for(var x in users){
    html += (Number(x)+1) + ' . ' + users[x].firstName + ' ' + users[x].lastName + '<br>'
}
document.getElementById('output').innerHTML = html;
console.log(html)