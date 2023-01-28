

 import throttle  from  "lodash.throttle";
  

 const form = document.querySelector('.feedback-form');
 const textarea = document.querySelector('.feedback-form textarea');
 
 const formData = {};
 
   form.addEventListener('submit',onFormSubmit);
   form.addEventListener('input', throttle (onFormInput),500);
 
  function onFormSubmit(e){
      e.preventDefault();
       
      e.target.reset();
       localStorage.removeItem('feedback-form-state');
  };
 
 
   function onFormInput ({target}){
    const email = target.name;
    const message = target.value;
 //    formData[target.name]=  target.value;
    formData[email] = message;
   
    const formDataJSON = JSON.stringify(formData)
    console.log(formDataJSON);
 
     localStorage.setItem('feedback-form-state', formDataJSON);
 };
 
 
 messageOutput();
 
 function messageOutput (){
   const messageSave = localStorage.getItem('feedback-form-state');
 
   if (messageSave){
     textarea.value =messageSave;
   }
 };
 
 