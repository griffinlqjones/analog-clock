// console.log ('Starting');
// let date = null;
//
// let request = new Request('http://worldtimeapi.org/timezoneAmerica/New_York', {
//   method: 'GET',
//   mode: 'cors',
//   redirect: 'follow',
//   headers: new Headers({
//     'Content-Type': 'text/plain'
//   })
// });
//
// fetch(request)
// .then(response =>{
//   console.log('It happened.');
//   if (!response.ok) {
//     throw new Error('HTTP error, status = ' + response.status);
//   }
//   return response.json();
// })
// .then((data) => {
//   let time = data;
//   date = document.createElement('h1');
//   date.innerText = time;
//   document.querySelector('body').appendChild(time);
// })
// .catch((e) => {
//   console.log('Error: ' + e.message);
//   date = document.createElement('h1');
//   let time = new Date();
//   date.innerText = time;
//   document.querySelector('body').appendChild(time);
// });
//
// console.log('Completed');

class ClockManager {
  constructor(secondHand, minuteHand, hourHand) {
    this.date = this.getTime();
    this.rotations = null;
    this.secondHand = secondHand;
    this.minuteHand = minuteHand;
    this.hourHand = hourHand;

  }

  getTime() {
    let date = new Date()
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    }
  }

  toRotation(date) {
    /* minutes = x/60 : y/360*/
    /* minutes = x/12 : y/360*/
    return {
      hours: (date.hours * 30) + 'deg',
      minutes: (date.minutes * 6) + 'deg',
      seconds: (date.seconds * 6) + 'deg'
    }
  }

  zeroDegreeCorrection(lastRotation, newRotation, hand) {
    if (newRotation < lastRotation) {
      hand.classList.add('transform-disabled');

      hand.style.transform = 'rotate(' + rotations.hours + ')';
      hand.classList.remove('transform-disabled');
    }
  }

  hourCorrection(hour) {
    if(hour > 12) {
      hour = hour - 12;
    }
    if(hour < 1) {
      hour = 12;
    }
    return hour < 10 ? '0' + hour : hour;
  }

  minuteCorrection(minutes) {
    return minutes < 10 ? '0' + minutes : minutes;
  }
  // Function to update the time
  updateTime() {
    time = getTime();
    rotations = toRotation(time);

    hourHand.style.transform = 'rotate(' + rotations.hours + ')';
    minuteHand.style.transform = 'rotate(' + rotations.minutes + ')';
    secondHand.style.transform = 'rotate(' + rotations.seconds + ')';
    console.log('Tick');
    digitalClockHour.innerText = hourCorrection(time.hours);
    digitalClockMinutes.innerText = minuteCorrection(time.minutes);
  }
}


let digitalClockHour = document.querySelector('#digital-clock .hour-value');
let digitalClockMinutes = document.querySelector('#digital-clock .minute-value');

let hourHand = document.querySelector('#hour-hand');
let minuteHand = document.querySelector('#minute-hand');
let secondHand = document.querySelector('#second-hand');

let clock = new ClockManager(secondHand, minuteHand, hourHand);


// let time = getTime();
// let rotations = toRotation(time);
// updateTime();
// setInterval(updateTime, 1000);

// function toRotation(date) {
//   /* minutes = x/60 : y/360*/
//   /* minutes = x/12 : y/360*/
//   return {
//     hours: (date.hours * 30) + 'deg',
//     minutes: (date.minutes * 6) + 'deg',
//     seconds: (date.seconds * 6) + 'deg'
//   }
// }
//
// function zeroDegreeCorrection(lastRotation, newRotation, hand) {
//   if (newRotation < lastRotation) {
//     hand.classList.add('transform-disabled');
//
//     hand.style.transform = 'rotate(' + rotations.hours + ')';
//     hand.classList.remove('transform-disabled');
//   }
// }
//
// function getTime() {
//   let date = new Date()
//   return {
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds()
//   }
// }
//
// function hourCorrection(hour) {
//   if(hour > 12) {
//     hour = hour - 12;
//   }
//   if(hour < 1) {
//     hour = 12;
//   }
//   return hour < 10 ? '0' + hour : hour;
// }
//
// function minuteCorrection(minutes) {
//   return minutes < 10 ? '0' + minutes : minutes;
// }
// // Function to update the time
// function updateTime() {
//   time = getTime();
//   rotations = toRotation(time);
//
//   hourHand.style.transform = 'rotate(' + rotations.hours + ')';
//   minuteHand.style.transform = 'rotate(' + rotations.minutes + ')';
//   secondHand.style.transform = 'rotate(' + rotations.seconds + ')';
//   console.log('Tick');
//   digitalClockHour.innerText = hourCorrection(time.hours);
//   digitalClockMinutes.innerText = minuteCorrection(time.minutes);
// }
