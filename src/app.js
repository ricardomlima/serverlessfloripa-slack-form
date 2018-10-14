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

  form.classList.add('loading');
  request.open('POST', 'https://us-central1-serverlessfloripa.cloudfunctions.net/handleInviteRequest');
  request.setRequestHeader('Content-Type', 'application/json')
  request.onreadystatechange = handleInviteResponse
  request.onreadystatechange = function(){handleInviteResponse(request)}
  request.send(formattedFormData);
}


function handleInviteResponse(request){
  if (request.readyState === 4){
    form.classList.remove('loading');
  }
}

form.addEventListener('submit', submitForm);
