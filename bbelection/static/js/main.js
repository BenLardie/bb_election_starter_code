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
    let form = document.createElement('form');
    let hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    form.method = 'POST';
    form.action ='https://bb-election-api.herokuapp.com/vote';
    li.appendChild(form);
    let button = document.createElement('button');
    button.innerHTML= 'Submit';
    button.type = 'submit';
    hiddenField.name = 'id';
    hiddenField.value = person.id;
    form.appendChild(hiddenField);
    form.appendChild(button);

});
});

    
});
