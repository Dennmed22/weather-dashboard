const issueContainer = document.getElementById('issues');
const fetchButton = document.getElementById('fetch-button');
const inputval = document.querySelector('#cityinput')
const city = document.querySelector('#cityoutput')
const descrip = document.querySelector('#description')
const temp = document.querySelector('#temp')
const wind = document.querySelector('#wind')
const maxTemp = document.querySelector('#tempMax')


function getApi(city) {
const weatherLink = 'https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid=73c15a19bebffba4ddf655737bbc2b28&units=imperial'
fetch(weatherLink)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  temp.innerText ='Current Temp: ' + data.main.temp + "°F";
  city.innerText = 'City: ' + data.name;
  descrip.innerText = 'Conditions: ' + data.weather[0].description;
  wind.innerText ='Wind Speed: ' +  data.wind.speed + " MPH";
});
}
fetchButton.addEventListener('click', getApi);

function getFive(city) {
   const fiveDay = //'https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=44.34&lon=10.99&appid=e79c26882ea37d82f93d1a156667b3d6'
   'https://pro.openweathermap.org/data/2.5/weather?'+inputval.value+'&appid=e79c26882ea37d82f93d1a156667b3d6'
   //'https://pro.openweathermap.org/data/2.5/forecast/hourly?'+inputval.value+'&appid=e79c26882ea37d82f93d1a156667b3d6&units=imperial'
  fetch(fiveDay)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    maxTemp.innerText = data.main.temp_max;
  });
  }
  fetchButton.addEventListener('click', getFive);

