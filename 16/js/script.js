var myForm = document.getElementById('myForm');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    var url = 'http://s179017901.onlinehome.us/discoveryvip/';
    var first = document.querySelector('input[name="first"]').value;
    var last = document.querySelector('input[name="last"]').value;
    var myData = 'first='+first+'&last='+last;
    axios.post(url,myData)
    .then(function(data){
       console.log(data.data)
    })
    .catch(function(error){
        console.log(error)
    })
})