const fetch = require("node-fetch");



const globalCorona=(callback)=>{
    fetch("https://api.covid19api.com/summary")
    .then(res=>res.json()).then(data=>callback({total:data.Global.TotalConfirmed,deaths:data.Global.TotalDeaths,recovered:data.Global.TotalRecovered},undefined))
    .catch(err=>callback(undefined,{error:"Cannot Connect to the server"}));
}



module.exports = globalCorona;