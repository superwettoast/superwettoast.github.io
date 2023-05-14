//when a element with the hidden class is clicked, play a type writer effect
var hidden = true;
var text = "wet toast#7683";

const typeWriter = (element, speed) => {
    hidden = false;
    const textArray = text.split('');
    element.innerHTML = ''; 
    textArray.forEach((letter, i) => {
        setTimeout(() => (element.innerHTML += letter), speed * i);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".hidden").addEventListener("click", function(event){
        if (hidden === true) {
            typeWriter(document.querySelector(".hidden"), 50);
            document.querySelector(".hidden").classList.add("normal-cursor")
        }  
    });
});
