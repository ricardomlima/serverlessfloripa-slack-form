import './app.css';

var form = document.querySelector('form')

function submitForm(evt){
  evt.preventDefault();
  sendInviteRequest();
}

function sendInviteRequest(){
  var submittedEmail = document.getElementById('slack-email').value;
  var request = new XMLHttpRequest();
  var formData = { email: submittedEmail };
  var formattedFormData = JSON.stringify(formData);

  request.open('POST', '/invite');
  request.send(formattedFormData);
}

form.addEventListener('submit', submitForm);
