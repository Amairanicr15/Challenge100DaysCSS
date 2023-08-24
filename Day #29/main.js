const inputText = document.getElementById('input-search');
const list = document.querySelector('.list')

inputText.addEventListener('input', function(){
    if(inputText.value.length >= 1) {
        list.classList.add('show')
        document.querySelector(".text-content-1").innerHTML = inputText.value 
        document.querySelector(".text-content-2").innerHTML = inputText.value
        document.querySelector(".text-content-3").innerHTML = inputText.value
    } else {
        list.classList.remove('show')
    }
});