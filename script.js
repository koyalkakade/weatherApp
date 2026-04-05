const btnElement = document.getElementById('getWeatherBTN')
const inputElement = document.querySelector('#cityInput')
const resultElement = document.querySelector('#showWeather')

function renderData(dataWeather) {
    resultElement.innerHTML=`
    <h3>${dataWeather.name}<span class="text-secondary"> ${dataWeather.sys.country} </span></h3>
   <p>Temp : ${dataWeather.main.temp}</p>
   <p>${dataWeather.weather[0].main} : ${dataWeather.weather[0].description}</p>
   <p>Speed : ${dataWeather.wind.speed}</p>
    `
      imgEle=document.getElementById('imgId');
     if(dataWeather.weather[0].main=='Clouds'){
         imgEle.src='./assets/weather.png'
       
     }else{
 imgEle.src='./assets/cloudy.png'
     }
}

async function fetchAPI(cName) {

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cName}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            renderData(data)
        })
        .catch(err => console.log(err))
}


function showWeather() {
    const city = inputElement.value
    fetchAPI(city)
    inputElement.value=''
}

btnElement.addEventListener('click', showWeather)