function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  //document.getElementById("contactSubmit").addEventListener("onclick", function(){console.log("Hi i works")});

  
  
  var errormsg = document.getElementById("errormessage");
  var myform = document.contactform;

  function validform(){
      if(email.value =="" || phone.value==""){
        errormsg.innerHTML="You must enter a valid email address and phone number!";
        console.log("works")
        return true;
      }
      else{
        errormsg.innerHTML="The information is submitted!";
        console.log("works not")
          return false;
      }
  }

   function validform1()
  {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(myform.email.value.match(mailformat))
  {
  myform.email.focus();
  errormsg.innerHTML="Thanks for providing the email!";
  console.log("works")
  return true;
  }
  else
  {
   errormsg.innerHTML="You have entered an invalid email address!";
   myform.email.focus();
   console.log("works not")
  return false;
  }
  } 

  function validform2()
{
  var phoneno = /^\d{10}$/;
  if(myform.phone.value.match(phoneno))

  {myform.phone.focus();
   errormsg.innerHTML="Thanks for providing the phone number!";
      return true;
  }
  else
  { myform.phone.focus();
    errormsg.innerHTML="Not a valid Phone Number";
     return false;
  }
  }
 