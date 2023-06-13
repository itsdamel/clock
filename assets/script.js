//Passing html elements to const

const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');

//Using interval function
const clock = setInterval(function time(){
    //Getting current hour, minute and second
    let dateToday = new Date();
    let newHour = dateToday.getHours();
    let newMinute = dateToday.getMinutes();
    let newSecond = dateToday.getSeconds();

    //Conditions to format content with a 0
    if(newHour < 10) newHour = '0' + newHour;
    if(newMinute < 10) newMinute = '0' + newMinute;
    if(newSecond < 10) newSecond = '0' + newSecond;

    //Asseting current hour, time and minute to the html element
    hourElement.textContent = newHour;
    minuteElement.textContent = newMinute;
    secondElement.textContent = newSecond;
});



