let toggle_button = document.querySelectorAll(".card");
toggle_button.forEach(element => {
    element.addEventListener("click",(e)=>{
        if(element.style.backgroundColor === "black"){
            element.style.backgroundColor = "whitesmoke";
        }
        else{
            element.style.backgroundColor = "black";
        }    
    });
});
//This helps toggle between questions and answers
