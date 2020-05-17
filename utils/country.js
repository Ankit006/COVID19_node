const fetch = require("node-fetch");

const countryCorona= (country,callback)=>{
    fetch(`https://api.covid19api.com/summary`).then(res=>res.json())
    .then(data=>{
        let place;
        for(let i = 0;i<data.Countries.length;i++){
        if(  encodeURIComponent(data.Countries[i].Country.toLowerCase().trim()) === encodeURIComponent( country.toLowerCase().trim())){
              place = data.Countries[i];
        }
     }
     if(!place){
         callback(undefined,{error:"Please provide a valid address"})
     }else{
         callback({country:place.Country,confirmed:place.TotalConfirmed,deaths:place.TotalDeaths,recovered:place.TotalRecovered},undefined)
     }

        
    }).catch(err=>callback(undefined,{error:"cannot connect to server"}))
}


 module.exports = countryCorona;
