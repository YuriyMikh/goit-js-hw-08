import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const formData = {} ;

formRef.addEventListener('input', dataFromForm);

function dataFromForm(event) {
  event.preventDefault();
    // console.log(event.target.name);
    // console.log(event.target.value);
    formData[event.target.name] = event.target.value
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    
    // event.currentTarget.reset();

}

// formRef.elements.message.value;