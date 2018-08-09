var joker = document.querySelector('#trigger');
joker.addEventListener('click', loadJoke)
function loadJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    
    fetch('https://api.chucknorris.io/jokes/random').then(function (response) {
        console.log(response.headers.get('Content-Type'))
        console.log(response.headers.get('Date'))
        console.log(response.type)
        return response.json()
         }).then(function (json) {
        console.log(json)
        let html = '<div><img src="'+json.icon_url+'"> '+json.value+'</div>';
        document.querySelector('#output').innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
    
    
    /*
    fetch('simple.txt').then(function (response) {
        return response.text()
    }).then(function (text) {
        console.log(text)
    })
    
    
    */
}