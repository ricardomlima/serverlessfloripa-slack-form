import './app.css';

const form = document.querySelector('form');

function submitForm(evt){
  evt.preventDefault();
  sendInviteRequest();
}

function sendInviteRequest(){
  const submittedEmail = document.getElementById('slack-email').value;
  const request = new XMLHttpRequest();
  const formData = { email: submittedEmail };
  const formattedFormData = JSON.stringify(formData);

  request.open('POST', 'https://us-central1-serverlessfloripa.cloudfunctions.net/handleInviteRequest');
  request.setRequestHeader('Content-Type', 'application/json')
  request.send(formattedFormData);
}

form.addEventListener('submit', submitForm);
