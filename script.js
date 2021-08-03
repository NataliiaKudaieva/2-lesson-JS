var km = prompt('Give me KM value, numbers only please');
var ft = prompt('Give me FT value, numbers only please');


var ftToKm = ft * 0.305;

if(km > ftToKm) {
  alert(km +'km' + ' is greater than ' + ft + 'ft or ' + ftToKm + 'km')
} else {
  alert(ft + 'ft or ' + ftToKm +'km' + ' is greater than ' + km +'km')
}



