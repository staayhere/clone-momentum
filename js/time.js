const clock = document.querySelector('.clock');
const todayDate = document.querySelector('.date');

function getClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const stringMonth = months[month];
    const date = today.getDate();
    const day = today.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const stringDay = days[day];
    
    todayDate.innerText = `${stringDay} ${date} ${stringMonth} ${year}`;    
}

getDate();
getClock();
setInterval(getClock, 1000);