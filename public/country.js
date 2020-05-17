const searchBox = document.querySelector("#search-box");
const searchMenu = document.querySelector("#search-menu");
const countryData = document.querySelector("#country-data");
const countryConfirmed = document.querySelector("#country-total");
const countryDeaths = document.querySelector("#country-death");
const countryRecovered = document.querySelector("#country-recover");

// search value

;
// create a country list 
const countries= [ "Afghanistan", "Algeria", "Andorra", "Albania", "Argentina", "Antigua and Barbuda", "Angola", "Armenia", "Australia", "Azerbaijan", "Austria", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Grenada", "Guinea", "Guinea-Bissau", "Guatemala", "Haiti", "Holy See (Vatican City State)", "Guyana", "Honduras", "Hungary", "Iceland", "Indonesia", "Iraq", "Ireland", "Iran, Islamic Republic of", "Italy", "Jamaica", "India", "Greece", "Israel", "Japan", "Jordan", "Kenya", "Korea (South)", "Kazakhstan", "Lao PDR", "Kyrgyzstan", "Kuwait", "Latvia", "Lebanon", "Liberia", "Liechtenstein", "Libya", "Lesotho", "Macedonia, Republic of", "Lithuania", "Madagascar", "Luxembourg", "Malawi", "Malaysia", "Maldives", "Mali", "Mauritania", "Mauritius", "Malta", "Moldova", "Monaco", "Mongolia", "Morocco", "Mozambique", "Myanmar", "Montenegro", "Mexico", "Nepal", "Namibia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Oman", "Pakistan", "Palestinian Territory", "Panama", "Papua New Guinea", "Paraguay", "Norway", "Peru", "Poland", "Portugal", "Qatar", "Philippines", "Romania", "Russian Federation", "Republic of Kosovo", "Rwanda", "Saint Kitts and Nevis", "Netherlands", "Saint Lucia", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Saint Vincent and Grenadines", "Sierra Leone", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Sudan", "Sri Lanka", "Sudan", "Swaziland", "Spain", "Sweden", "Syrian Arab Republic (Syria)", "Switzerland", "Taiwan, Republic of China", "Suriname", "Tanzania, United Republic of", "Tajikistan", "Thailand", "Togo", "Timor-Leste", "Trinidad and Tobago", "Uganda", "Turkey", "Ukraine", "Singapore", "United Kingdom", "Uruguay", "United Arab Emirates", "United States of America", "Uzbekistan", "Tunisia", "Venezuela (Bolivarian Republic)", "Viet Nam", "Zambia", "Yemen", "Western  Sahara", "Zimbabwe"]
for(let i = 0;i<countries.length;i++){
    let node = document.createElement("div");
    let textNode = document.createTextNode(countries[i]);
    node.appendChild(textNode);
    node.classList.add("search-items");
    searchMenu.appendChild(node)

}

// country search
const searchItems = Array.from(document.querySelectorAll(".search-items"));
searchBox.addEventListener("input",()=>{
    let searchCountry
    let searchValue = searchBox.value.toLowerCase();
    if(!searchValue){
        searchMenu.style.display = "none"
    }else{
           searchMenu.style.display = "block"
           for(let i = 0;i<searchItems.length;i++){
               let value = searchItems[i].textContent.toLowerCase();

               if(!value.includes(searchValue.toLowerCase())){
                   searchItems[i].style.display = "none"
               }else{
                    searchItems[i].style.display = "block"
                    searchItems[i].addEventListener("click",()=>{
                       searchMenu.style.display = "none"
                       fetch(`/countries?country=${searchItems[i].textContent}`).then(res=>res.json()).then(data=>{
                           if(!data.error){
                            // country
                             // data confirmed
                               countryConfirmed.textContent = data.confirmed
                               countryDeaths.textContent = data.deaths
                               countryRecovered.textContent = data.recovered
                           }else{
                               console.log("cannot connect:")
                           }
                       }).catch(err=>console.log(err))
                    });
               }
           }
    }
})





// country data fetch

