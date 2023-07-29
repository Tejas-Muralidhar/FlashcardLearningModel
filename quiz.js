var options = document.querySelectorAll(".option");
options.forEach(element => {
    element.addEventListener("click", RevealStatus);
});

function RevealStatus(e){
    if(e.target.classList.contains('correct')){
        e.target.style.backgroundColor = '#7dd87d';
    }
    else{
        e.target.style.backgroundColor = '#eb2632';
    }
}

function CalculateScore(){
    
}