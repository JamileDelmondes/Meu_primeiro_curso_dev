const modal_overlay = document.querySelector ('.modal_overlay');
const cards = document.querySelectorAll ('.card');

for (let card of cards){
    card.addEventListener ("click",function(){
        modal_overlay.classList.add('active')
    })
}

document.querySelector ('.close_modal').addEventListener("click",function(){
    modal_overlay.classList.remove("active")
})