import throttle from 'lodash.throttle'

 
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const formData = {};

formData.email = email.value;
formData.message = message.value;

const onFormInput = function (e) {
  
    formData.email = email.value
    formData.message = message.value

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem('feedback-form-state', formDataJSON);
};

const onFormSubmit = function (e) {
    e.preventDefault();

   const { elements: { email, message },} = e.target;

     const formValue = { email: email.value, message: message.value };
    console.log(formValue);
    

    e.target.reset();
    
    localStorage.removeItem('feedback-form-state');
    };


const savedInfo = localStorage.getItem('feedback-form-state');
const parsedInfo = JSON.parse(savedInfo);

messageOutput();

function messageOutput () {

    if (savedInfo) {
    
    console.log(parsedInfo.email || '');
    console.log(parsedInfo.message || '');
        
    email.value = parsedInfo.email || '';
    message.value = parsedInfo.message || '';
    
    } 
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);



