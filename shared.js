var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button')

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}
 backdrop.addEventListener('click', function() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
 })

 modalNoButton.addEventListener('click', function() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
 })

 function closeModal() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
 }