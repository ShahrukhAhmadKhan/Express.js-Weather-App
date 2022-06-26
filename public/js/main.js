

const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const status = document.getElementById('status');
const curDate = document.getElementById('date');
const temp = document.getElementById('temp');
let weathercon = document.getElementById("weathercon");
// =========================================
// alert(cityName.value);
const getInfo = async(event) =>{
    
    event.preventDefault();
    let cityval = cityName.value;
    if(cityval === ""){
        city_name.innerText = `plz write the name`;
        temp.innerText = `plz recheck the city name`;
        status.innerText = `No data for this...`;
        curDate.innerText = `Error...`;




    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f5a80d7130338d1afd4667cac761ba0d`;
             // let url = 'hhttps://api.openweathermap.org/data/2.5/weather?q=lahore&appid=f5a80d7130338d1afd4667cac761ba0d';
            const response = await fetch(url);
            //console.log(response);
            const data = await response.json();
            const arrdata = [data];
            temp.innerText = arrdata[0].main.temp + " °F";
            // let a = arrdata[0].main.temp;
            // a = a-32;
            // a = a * 5 / 9;
            // temp.innerText = a + " C";
            city_name.innerText =arrdata[0].sys.country +" | "+ cityval;
            status.innerText=arrdata[0].weather[0].description;
            weathercon = arrdata[0].weather[0].description;
            // ===========================================
            if(weathercon =="Sunny"){
                weathercon.innerHTML= "<i class='fa-solid fa-sun'></i>";
            }
            else if (weathercon =="Clouds"){
                weathercon.innerText= "<i class='fa-solid fa-cloud'></i>";

            } else if (weathercon =="Rainy"){
                weathercon.innerText= "<i class='fa-solid fa-cloud-drizzle'></i>";

            }
            else if (weathercon =="scattered clouds"){
                weathercon.innerHTML= "<i class='fa-solid fa-cloud-bolt-sun'></i>";

            }
            else if (weathercon =="haze"){
                weathercon.innerText= "<i class='fa-solid fa-sun-haze'></i>";

            }
            else{
                weathercon.innerText= "<i class='fa-solid fa-sun-bright'></i>";

            }
           
            // =====================================
            const getCurrentDay= () => {
                var weekday = new Array(7);
                    weekday[0]="Sun";
                    weekday[1]="Mon";
                    weekday[2]="Tue";
                    weekday[3]="Wed";
                    weekday[4]="thur";
                    weekday[5]="Fri";
                    weekday[6]="Sat";
            
            
                let currentTime = new Date();
                let day = weekday[currentTime.getDay()];
                 return day;   
                //console.log(weekday[currentTime.getDay()]);
            };
            
            const getCurrentTime = () => {
                var months = [
                    "jan",
                    "feb",
                    "march",
                    "april",
                    "may",
                    "june",
                    "july",
                    "Aug",
                    "sep",
                    "oct",
                    "nov",
                    "Dec",
                ]
            var now = new Date();
            var month = months[now.getMonth()];
            var date =  now.getDate();
            // var year = now.getFullYear();
            let hours =now.getHours();
            let mins =now.getMinutes();
            let perios = "AM";                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            if( hours>11){
                perios ="PM";
                if(hours > 12) hours -= 12;
            }
            if(mins < 10){
                mins = "0" + mins;
            }
            return `${month} ${date} | ${hours}:${mins}${perios}`;
            //console.log(month + " " + date +" | "+ hours +":"+ mins + perios);
            };
            curDate.innerText =  getCurrentDay() + "  | " + getCurrentTime();






            // ===============================================


        }catch{
        city_name.innerText = ` plz write the name carfully`;
        temp.innerText = `plz recheck the city name`;
        status.innerText = `No data for this...`;
        curDate.innerText = `Error...`;


        }

    }
    // alert('hy');
    
   
}
submitBtn.addEventListener('click', getInfo);