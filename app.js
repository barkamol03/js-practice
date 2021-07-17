const speedLimit = 70
const kmPerPoint = 5
const maxPoints = 12
checkSpeed(97)

function checkSpeed(speed) {
    if (speed < speedLimit + kmPerPoint) {
        console.log('Yaxshi');
    } else {
       let points = Math.floor((speed - speedLimit) / kmPerPoint);
       if (points >= maxPoints) {
          console.log('Guvohnoma olib qo\'yildi'); 
       } else {
           console.log('Sizdagi jarimalar soni: ', points);
       }
    }
}