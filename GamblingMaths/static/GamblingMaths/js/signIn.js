
var open=0;
var teams = document.querySelectorAll(".register-with-team")[0];
var forms = document.querySelectorAll("#form")[0];

teams.addEventListener("click" , function(){
    if(open == 0){
    forms.style.display = "block";
     open = 1;    
    }
}); 
var close = document.querySelector("#form span");
close.addEventListener("click" , function(){
    if(open == 1){
    forms.style.display = "none";
     open = 0;    
    }
}); 