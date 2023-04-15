import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state'; //константа

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextInput, 500));

let formData = {}; //объект для хранения данных в localStorage

checkLocalStorage(); //вызываем чтобы проверить есть ли уже что-то в localStorage

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  if (
    formRef.elements.email.value === '' ||
    formRef.elements.message.value === ''
  )
    return alert('Please fill in all fields!');

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  formData = {};
}

function onTextInput(event) {
  formData[event.target.name] = event.target.value; //надо использовать именно target, а не currentTarget. Иначе при "всплытии" в currentTarget может быть что угодно (null, document, window...), поэтому lodash.throttle не отрботает
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function checkLocalStorage(event) {
  let data = localStorage.getItem(LOCALSTORAGE_KEY);
  if (data) {
    formData = JSON.parse(data);
    formRef.elements.email.value = formData.email;
    formRef.elements.message.value = formData.message;
  }
}
