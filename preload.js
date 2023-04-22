var backButton = false;
var isClient = true;
window.addEventListener('DOMContentLoaded', function() {
    var element = document.createElement('div');
    element.classList.add('close-klindosclient')
    element.style.position = 'absolute'
    element.style.right = '0'
    element.style.top = '-40px'
    element.style.height = '50px'
    element.style.width = '50px'
    element.style.backgroundColor = 'red'
    element.style.display = 'flex'
    element.style.justifyContent = 'center'
    element.style.alignItems = 'center'
    element.style.cursor = 'pointer'
    element.style.transition = 'ease 0.2s top'
    element.style.zIndex = '99998989999998989'
    element.textContent = 'X'
    element.onclick = function() {
        parent.window.close();
    }
    document.body.appendChild(element)
})
window.onload = () => {
    setTimeout(() => {
        if (parent.document.body.innerHTML.indexOf("readyuidaghdhskadhashkdhjs")==-1) {
            var back = document.createElement("div")
            back.classList.add('back-klindosclient')
            back.style.position = 'absolute'
            back.style.left = '0'
            back.style.top = '-40px'
            back.style.height = '50px'
            back.style.width = '50px'
            back.style.backgroundColor = 'red'
            back.style.display = 'flex'
            back.style.justifyContent = 'center'
            back.style.alignItems = 'center'
            back.style.cursor = 'pointer'
            back.style.transition = 'ease 0.2s top'
            back.style.zIndex = '99998989999998989'
            back.textContent = '<--'
            back.onclick = () => {
                history.back()
            }
            document.body.appendChild(back)
            backButton=true;
        }
    }, 2000);
}
window.addEventListener("mousemove", function(e) {
    var x = window.innerWidth- e.clientX
    var xleft = e.clientX
    var y = e.clientY
    if (x < 50 && y < 50) {
        document.querySelector(".close-klindosclient").style.top = '0px'
    }
    else {
        document.querySelector(".close-klindosclient").style.top = '-40px'
    }
    if (backButton) {
        if (xleft < 50 && y < 50) {
            document.querySelector(".back-klindosclient").style.top = '0px'
        }
        else {
            document.querySelector(".back-klindosclient").style.top = '-40px'
        }
    }
})