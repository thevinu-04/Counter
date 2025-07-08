const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const countlabel= document.getElementById("countlabel");
const submit = document.getElementById("submit");



let count = 0;
let timer;

increase.onclick= function(){
    count++;
    countlabel.textContent = count;
}

decrease.onclick= function(){
    count--;
    countlabel.textContent = count;
}

reset.onclick= function(){
    count=0;
    countlabel.textContent = count;
    
    clearInterval(timer);
    
}

function update(){

    
    count--;
    countlabel.textContent = count;
    
    if(count==0){
        
        
        clearInterval(timer);
    }

}

submit.onclick= function () {
    timer = setInterval(update, 1000);
  };

    
   

