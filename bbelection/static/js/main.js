document.addEventListener("DOMContentLoaded", function() {
let body = document.querySelector('body');
let ul = document.querySelector('ul');
body.appendChild(ul);
axios.get('https://bb-election-api.herokuapp.com/')
.then((response) => {
    let electionCans = response.data.candidates;
    electionCans.forEach( person => {
        console.log(person);
    let li = document.createElement('li');
    li.innerHTML = `Name: ${person.name} Votes: ${person.votes}`;
    ul.appendChild(li);
    
});
});

    
});
