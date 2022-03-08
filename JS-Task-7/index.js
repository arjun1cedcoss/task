function getData() {
  const name = document.getElementById("name").value.trim();
  const age = +document.getElementById("age").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const select = document.getElementById("select");
  let checkbox=document.querySelectorAll(".checkbox");
  let error=document.querySelectorAll(".error");
  
  let phone_valid = /^[6-9]\d{9}/;
  let correct_name = /^[a-z A-Z]+$/;
  let correct_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let age_correct= /^[1-9]\d*(\. \d+)?$/;
  
  if (name == "" || correct_name.test(name) == false) {
    error[0].textContent = "** please Enter Name";
    return false;
  }
 
  else if (age == "" ||age_correct.test(age)==false || age < 18 || age>120) {
    error[1].textContent = "** age should be beetwen 18 to 120 years ";
    return false;}

  else if (email == ""  || correct_email.test(email)==false) {
    error[2].textContent = "** Please enter Email Id ";
    return false; }

  else if (contact == null || contact.length < 10 || phone_valid.test(contact) == false) {
    error[3].textContent = "** please enter valid mobile number";
    return false;}
    else if(select.value=="select")
    {
      error[4].textContent = "** select valid city";
      return false;
    }

  else if (checkbox[0].checked==false && checkbox[1].checked==false && checkbox[2].checked==false){
    document.getElementById("error_hobbies").textContent = "** Please check atleast one hobbies";
    return false; }
    else{
     let status=confirm("are you sure to submit your from");
     if(status==true)
     {
       return true;
     }
     else
     {
       return false;
     }
  }
}             
function hide() {
  let a = document.querySelectorAll(".error");                                                                                                                                                                                                                                  
  a.forEach(element => {
    element.innerText="";
  });
    
  }


