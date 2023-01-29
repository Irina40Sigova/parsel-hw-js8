import throttle from 'lodash.throttle'


const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea');
const email = document.querySelector('input');

form.addEventListener('input', throttle (onFormInput),500);
form.addEventListener('submit',onFormSubmit);

const formData = {};

  function onFormInput (e){
       formData.email= email.value;
       formData.message=message.value;

      const formDataJSON = JSON.stringify(formData)
      localStorage.setItem('feedback-form-state', formDataJSON);

  };
 

function onFormSubmit({target}){
    e.preventDefault();

    const { el:
       { email, message },
      } = e.target;

    const  formValue = { email: email.value, message: message.value };
      console.log(formValue);

    e.target.reset();     
      localStorage.removeItem('feedback-form-state'); 
    };


   messageOutput();


  function  messageOutput() {

const saveMessage =localStorage.getItem('feedback-form-state'); 
  if (saveMessage  === null) {
    return;
  }
  const savedForm = JSON.parse(saveMessage);

  Object.entries(savedForm).forEach(([name, value]) => {
    formData[name] = value;
    form.elements[name].value = value;
  });
};




