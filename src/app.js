import './app.css';

const form = document.querySelector('form');
const feedbackContainer = document.querySelector('.app-feedback');

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
  feedbackContainer.className = 'app-feedback';
  request.open('POST', 'https://us-central1-serverlessfloripa.cloudfunctions.net/handleInviteRequest');
  request.setRequestHeader('Content-Type', 'application/json')
  request.onreadystatechange = handleInviteResponse
  request.onreadystatechange = function(){handleInviteResponse(request)}
  request.send(formattedFormData);
}


function handleInviteResponse(request){
  if (request.readyState === 4){
    form.classList.remove('loading');
    if (request.status === 200){
      feedbackContainer.classList.add('success');
      feedbackContainer.innerText = 'We sent you an invite. Check your email.'
    } else {
      feedbackContainer.classList.add('error');
      feedbackContainer.innerText = request.responseText;
    }
  }
}

form.addEventListener('submit', submitForm);
