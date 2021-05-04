const http = require("http");
const fs = require("fs");
const requests=require("requests")

const replaceVal=(tempVal,orgVal)=>{
    let temperature=tempVal.replace('{%tempval%}',orgVal.main.temp);
     temperature=temperature.replace('{%tempmin%}',orgVal.main.temp_min);
     temperature=temperature.replace('{%tempmax%}',orgVal.main.temp_max);
     temperature=temperature.replace('{%location%}',orgVal.name);
     temperature=temperature.replace('{%country%}',orgVal.sys.country);
     temperature=temperature.replace('{%tempstatus%}',orgVal.weather[0].main);
     return temperature
}
const homeFile=fs.readFileSync('index.html','utf-8');

const server=http.createServer((req,res)=>{
    if (req.url=="/"){

        requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=360b09fc988c05f8026ff181763a5187")
        .on('data', function (chunk) {
            const objData=JSON.parse(chunk);
            const arrData=[objData]
        //   console.log(arrData[0])
        let realTimeData=arrData.map((val)=> replaceVal(homeFile,val)).join("");//converts array into string
        console.log(realTimeData)
        // res.write(realTimeData)
       
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
         
          res.end();
        });
    }

})

server.listen(8000,'127.0.0.1')

