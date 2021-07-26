// Global variable declarations
var cityList = [];
var cityname;

// local storage functions
CityList();
Weather();


// This function displays the city entered by the user into the DOM
function renderCities(){
    $("#cities").empty();
    $("#city").val("");
    
    for (i=0; i<cityList.length; i++){
        var a = $("<a>");
        a.addClass("list-group-item list-group-item-action list-group-item-primary city");
        a.attr("data-name", cityList[i]);
        a.text(cityList[i]);
        $("#cities").prepend(a);
    } 
}

// This function pulls the city list array from local storage
function initCityList() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    
    if (storedCities !== null) {
        cityList = storedCities;
    }
    
    renderCities();
    }

// This function pull the current city into local storage to display the current weather forecast on reload
function initWeather() {
    var storedWeather = JSON.parse(localStorage.getItem("currentCity"));

    if (storedWeather !== null) {
        cityname = storedWeather;

        displayWeather();
        displayFiveDayForecast();
    }
}

// City array into local storage
function storeCityArray() {
    localStorage.setItem("cities", JSON.stringify(cityList));
    }

// current city into local storage
function storeCurrentCity() {

    localStorage.setItem("currentCity", JSON.stringify(cityname));
}

// on click btn for search
$("#citybtn").on("click", function(event){
     event.preventDefault();
 
     cityname = $("#city").val().trim();
     if(cityname === ""){
         alert("Enter a city")
 
     }else if (cityList.length >= 5){  
         cityList.shift();
         cityList.push(cityname);
 
     }else{
     cityList.push(cityname);
     }
     storeCurrentCity();
     storeCityArray();
     renderCities();
     displayWeather();
     displayFiveDayForecast();
 });
 