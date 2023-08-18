(function(){
   const button= document.querySelectorAll(".counterBtn");
   let count=0;
   button.forEach(function(buttons){
      buttons.addEventListener("click",function(){
        if(buttons.classList.contains("prevBtn"))
        {
            count--;
        }
        else if(buttons.classList.contains("nextBtn"))
        {
            count++;
        }

        const counter=document.querySelector("#counter")
    
            counter.textContent=count;
            if(count<0)
            {
                counter.style.color='red';
            
            }
            else if(count>0)
            {
                counter.style.color="green"
            }
            else {
                counter.style.color="#333333"
            }
        




      })



   })









}) ()