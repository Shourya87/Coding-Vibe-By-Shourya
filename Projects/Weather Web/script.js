// HTML elements:
    /* Search Bar */
const searchBtn = document.getElementById("search-icon");

    /* For Row 1 Box 1 */
const R1B1city = document.getElementById("box1-city");
const R1B1time = document.getElementById("box1-time");
const R1B1date = document.getElementById("box1-date");

    /* For Row 1 Box 2 */
const R1B2temp = document.getElementById("box2-temp");
const R1B2img = document.getElementById("box2-img");
const R1B2text = document.getElementById("box2-weather-text");

    /* For Row 2 Box 1 */
        //Write code for this when i get api for 5 days forecast


    /* For Row 2 Box 2 */
        //Write code for this when i get api for hourly forecast




// Add Click Event
searchBtn.addEventListener("click" , () => {
    const searchCity = document.getElementById("search-city").value.trim();

    if(searchCity === ""){
        alert("Please enter a city name!");
        return;
    }

    // Dynamic URL city ke sath
    
    // API URL
    const url = `https://api.weatherapi.com/v1/current.json?key=3994696a481e4088913142400250110&q=${searchCity}&aqi=no`;

    // Fetch API call
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // just to see full response
        console.log(data); 

        // Accessing data
            /* Row1 Box1 */
        const city = data.location.name;
        const [date , time] = data.location.localtime.split(" ");
        
            /* Row1 Box2 */
        const temp = data.current.temp_c;
        const weatherText = data.current.condition.text;
        const weatherImg = "https:" + data.current.condition.icon;


        // Setting values in HTML
        R1B1city.innerText = city;
        R1B1time.innerText = time;
        R1B1date.innerText = date;

        R1B2temp.innerText = temp;
        R1B2text.innerText = weatherText;
        R1B2img.src = weatherImg;

    })
    .catch(error => {
        alert("Error:", error);
    });

})