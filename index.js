let weather = {
  "apikey":'8cb7d2e7ee5454adc3d22fdf681ecb4e',

fetchweather:function() {
    fetch(
        "https://openweathermap.org/https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=8cb7d2e7ee5454adc3d22fdf681ecb4e"
    ).then((response)=>response.json())
     .then((data) => console.log(data));
}
};