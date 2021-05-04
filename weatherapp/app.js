let currentDate=document.getElementById('date');
let weatherCon=document.getElementById('weathercon')

const tempStatus="{%tempstatus%}";
if(tempStatus=="Sunny"){
    weatherCon.innerHTML="<i class='fas fa-sun' style='color: #f1c40f'></i>"
}else if(tempStatus=="Clouds"){
    weatherCon.innerHTML="<i class='fas fa-cloud' style='color: #dfe4ea'></i>"
}
else if(tempStatus=="Rainy"){
    weatherCon.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
}else{
    weatherCon.innerHTML="<i class='fas fa-cloud' style='color: #44c3de'></i>"
}

const getCurrentDay=()=>{
    let currentTime=new Date();
    let weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let day=weekday[currentTime.getDay()];
    return day;
};

// getCurrentDay()

const getCurrentTime=()=>{
    let currentTime=new Date();
    let months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    let month=months[currentTime.getMonth()];
    let date=currentTime.getDate();

    let hours=currentTime.getHours();
    let minutes=currentTime.getMinutes();
    let period='AM';
    if(hours>11){
        period='PM';
        
    }
    if(hours<10){
        hours="0"+hours
    }

    if(minutes<10){
        minutes="0"+minutes
    }
  return `${month}${date} | ${hours}:${minutes} ${period}`
}

currentDate.innerHTML=getCurrentDay()+' | ' +getCurrentTime()


