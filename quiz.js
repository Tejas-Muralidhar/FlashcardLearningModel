var options = document.querySelectorAll(".option");
options.forEach(element => {
    element.addEventListener("click", RevealStatus);
});

function RevealStatus(e){
    if(e.target.classList.contains('correct')){
        e.target.style.backgroundColor = 'green';
    }
    else{
        e.target.style.backgroundColor = 'red';
    }
}

function CalculateScore(){
    
}