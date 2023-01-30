const button = document.getElementById('button');
const content = document.getElementById('content')
button.addEventListener('click',() => {
    fetch('https://www.boredapi.com/api/activity')
    .then(res => res.json())
    .then(res => {
        content.innerHTML = res.activity
    })
})
