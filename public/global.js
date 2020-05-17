const globalTotal = document.querySelector("#global-total");
const globalDeaths = document.querySelector("#global-death");
const globalRecover = document.querySelector("#global-recover");



fetch("/global").then(res=>res.json()).then(data=>{
    // total confirmed
    globalTotal.textContent = data.total;
    globalTotal.textContent = parseInt(globalTotal.textContent,10)-500;
    let addingToTotal = 1;
    setInterval(()=>{
        if(addingToTotal <= 500){
            globalTotal.textContent = parseInt(globalTotal.textContent,10) +1;
            addingToTotal++;
        }
    },0.1)
    // total deaths
    globalDeaths.textContent = data.deaths;
    globalDeaths.textContent = parseInt(globalDeaths.textContent,10)-500;
    let addToDeathValue = 1;
    setInterval(()=>{
       if(addToDeathValue <= 500){
           globalDeaths.textContent = parseInt(globalDeaths.textContent,10)+1;
           addToDeathValue++;
       }
    },0.1)
    // total recovered
    globalRecover.textContent = data.recovered;
    let addToRecover = 1;
    globalRecover.textContent = parseInt(globalRecover.textContent,10)-500;
    setInterval(()=>{
        if(addToRecover <= 500){
            globalRecover.textContent = parseInt(globalRecover.textContent,10)+1;
            addToRecover++;
        }
    },0.1)

})