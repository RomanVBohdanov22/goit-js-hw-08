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
const parsedDataLocal = JSON.parse(localStorage.getItem(STORAGE_KEY));

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener("input", _.throttle(formReader, 500));

function formReader(event) { ; }