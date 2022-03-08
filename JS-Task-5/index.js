let heading=document.querySelector("#heading");
let textarea = document.getElementById("textarea");
textarea.addEventListener('input',()=>{
  
        if (textarea.value.trim() == "") {
                heading.innerHTML="Users";
        }
         else{
                heading.innerHTML =textarea.value;

         }
    
    
});