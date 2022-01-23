const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('input');
const showName = document.querySelector('.name');
const showSentence = document.querySelector('.suggestion');
const beforeLogin = document.querySelector('.loginWrap');
const afterLogin = document.querySelector('.afterLogin');

function timeMessage(){
    const today = new Date();
    const time = today.getHours();
    let message = 'Good Afternoon';

    if(time >= 4 && time < 12) {
        message = 'Good Morning';
    } else if(time > 20 || time < 4) {
        message = 'Good Evening'
    }

    return message
}

function timeSuggestion(){
    const today =new Date();
    const time = today.getHours();
    let suggestion = 'Take a break <3';

    if(time >= 7 && time < 14) {
        suggestion = 'Get some coffee :)';
    } else if(time > 23 || time < 2) {
        suggestion = 'Time to bed ;)';
    } else if(time >= 3 && time < 7) {
        suggestion = "It's too late! You need to go to bed";
    }
    return suggestion
}

function showUserName(userName){
    const showMessage = timeMessage();
    const showSuggestion = timeSuggestion();

    showName.classList.remove('hidden');
    showName.innerText = `${showMessage}, ${userName}`;

    showSentence.classList.remove('hidden');
    showSentence.innerText = `${showSuggestion}`;
}

function getUserName(event){
    event.preventDefault();
    beforeLogin.classList.add('fadeOut');
    afterLogin.classList.remove('hidden');
    afterLogin.classList.add('fadeIn');
    
    const userName = loginInput.value;
    localStorage.setItem('User Name', userName);
    loginInput.value = '';          //submit후 input에 입력한 텍스트 삭제
    showUserName(userName);
}

const savedUserName = localStorage.getItem('User Name');

if(savedUserName !== null) {
    beforeLogin.classList.add('hidden');
    afterLogin.classList.remove('hidden');
    showUserName(savedUserName);
} else {
    loginForm.addEventListener('submit', getUserName);
}
