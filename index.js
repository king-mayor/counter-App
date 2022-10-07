const count = document.querySelector('.counter');
const addNumber = document.querySelector('.add');
const subNumber = document.querySelector('.substract');
const resetNumber = document.querySelector('.reset');


addNumber.addEventListener("click", () => {
    count.innerHTML++;
    setColor();
})
subNumber.addEventListener("click", () =>{
    count.innerHTML--;
    setColor();
})
resetNumber.addEventListener("click", () =>{
    count.innerHTML = 0;
    setColor();
})

function setColor() {
if(count.innerHTML > 0){
        count.style.color = "green";
}
if(count.innerHTML < 0){
    count.style.color = "red";
}
if(count.innerHTML === 0){
    count.style.color = "black";
}
}