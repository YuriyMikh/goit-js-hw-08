import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state'; //константа, имя ключа для хранения данных в localStorage

const formRef = document.querySelector('.js-feedback-form');

let formData = { email: '', message: '' }; //объект для хранения данных в localStorage

checkLocalStorage(); //вызываем чтобы проверить есть ли уже что-то в localStorage

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  if (
    formRef.elements.email.value === '' ||
    formRef.elements.message.value === ''
  )
    return alert('Please fill in all fields!');

  console.log(formData);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset(); //удаляем данные, которые ввел пользователь в инпуты
  formData = {};
}

function onTextInput(event) {
  formData[event.target.name] = event.target.value; //надо использовать именно target, а не currentTarget. Иначе при "всплытии" в currentTarget может быть что угодно (null, document, window...), поэтому lodash.throttle не отработает
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
