var i = 0
var text = ['frontend developer', 'blogger', 'contributer']
var typing = ''
var typingfinished = false
var k = 0
const int = setInterval(() => {
    if (i < text[k].length) {
        typing += text[k][i]
        document.getElementById('something').innerText = typing
        i++
    }
    else {
        typing = ''
        i = 0
        if (k != text.length - 1) {
            k++
        } else {
            k = 0
        }
    }
}, 350)