/*
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
*/

import _ from 'lodash';
const STORAGE_KEY = "feedback-form-state";

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

let toData = {};
const parsedDataLocal = load(STORAGE_KEY);

const refsToForm = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),
};

onLoadForm();
refsToForm.form.addEventListener('submit', onFormSubmit);
refsToForm.form.addEventListener('input', _.throttle(onInput, 500));
//refsToForm.form.addEventListener('input', e =>
//{ toData[e.target.name] = e.target.value; });



function onFormSubmit(e) { 
    e.preventDefault();
    console.log(parsedDataLocal);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function onInput(e)
{   
    toData[e.target.name] = e.target.value;
    return save(STORAGE_KEY, toData);
}

function onLoadForm() { 
    if (load(STORAGE_KEY))
    {
             
        const outputForm = load(STORAGE_KEY);
        const formKeys = Object.keys(outputForm);

        formKeys.map(element => {
            document.querySelector(`[name='${element}']`).value = outputForm[element];
        });
        //const savedForm = load(STORAGE_KEY);
        //const formKeys = Object.keys(savedForm);
        /*formKeys.map( element => {
            document.querySelector(
                `name='${element}'`
            ).value = savedForm[element];
        });*/

        }
}

