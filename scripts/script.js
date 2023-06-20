const form = document.getElementById('form')
const length = document.getElementById('length')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const numeric = document.getElementById('numeric')
const special = document.getElementById('special')
const errorElement = document.getElementById('errorElement')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(lowercase.checked || uppercase.checked || numeric.checked || special.checked);
})