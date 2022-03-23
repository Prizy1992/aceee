let tage2 = document.querySelector('.tag2')
let form = document.querySelector('.form')
let burger = document.querySelector('.burger')

let list = document.querySelector('.list')

tage2.addEventListener('click', function() {
    
    addClick()
})

burger.addEventListener('click', function() {
    list.classList.toggle('open-list')
})
function addClick() {
    
        form.classList.toggle('open')

    
}