const form = document.getElementById('form')
const length = document.getElementById('length')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const numeric = document.getElementById('numeric')
const special = document.getElementById('special')
const errorElement = document.getElementById('errorElement')

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChars = "0123456789"
var specialChars = "!?@#$%^&*"

function createPassword() {
    
    var charsIncluded = ""
    var password = ""

    if (lowercase.checked) charsIncluded += lowercaseChars
    if (uppercase.checked) charsIncluded += uppercaseChars
    if (numeric.checked) charsIncluded += numericChars
    if (special.checked) charsIncluded += specialChars

    for (let i = 0; i < length.value; i++) {
        password += charsIncluded[Math.floor(Math.random() * charsIncluded.length)]
    }

    alert(`Password:\n${password}`)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (lowercase.checked || uppercase.checked || numeric.checked || special.checked) {
        errorElement.style.display = "none"
        createPassword()
    } else errorElement.style.display = "block"
})