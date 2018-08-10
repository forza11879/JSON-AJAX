var myForm = document.getElementById('myForm');
        myForm.addEventListener('submit',function(e){
            e.preventDefault();
            var url = 'https://randomuser.me/api/?results=10';
            axios.get(url)
            .then(function(data){
                var people = data.data.results;
                var html = '<h2>Results</h2>'
                for(var x=0;x<people.length;x++){
                     html += people[x].name.first + '  ' + people[x].name.last + '<img src="'+people[x].picture.thumbnail+'"><br>';
                }
                
                
                document.querySelector('#output').innerHTML = html;
            })
        })