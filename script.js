let newPage = document.querySelector(".newPage");
let newData = [];
let recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
let countrySearch = JSON.parse(localStorage.getItem("countrySearch"));

newPage.innerHTML = `
  <nav>
      <div class="logo">
        <p class="logo-text">Where in the world?</p>
      </div>
    </nav>
    <div class="loading-container" style="
    height: 40px;
">
    </div>
    <main class= "main-container">
      <div class="back-home">
        <button class="back-btn">
          <img src="./img/back-arrow.png" alt="" class="back-arrow" />
          <span class="back">back</span>
        </button>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search country..." id="searchCountry" class="newPageSearch"/>

        <button class="search-btn find-btn">Find</button>
      </div>
      <div class="country-details-container">
        <div class="flag-info">
          <img class="flag-img" src="https://flagcdn.com/in.svg" alt="" />
        </div>
        <div class="country-info-container">
          <h1 class="country-name">India</h1>
          <div class="country-detail">
            <div class="country-left-detail">
              <p class="native-name">
                Native Name : <span class="tetx native-name-text"> भारत</span>
              </p>
              <p class="population">
                population : <span class="population-text"> 1380M</span>
              </p>
              <p class="Region">
                Region: <span class="region-text">Asia</span>
              </p>
              <p class="sub-region">
                Sub Region : <span class="sub-region-text">Southern Asia</span>
              </p>
              <p class="capital">
                capital : <span class="capital-text">New Delhi</span>
              </p>
            </div>
            <div class="country-right-detail">
              <p class="currency">
                currancy : <span class="currency-text"> Indian rupee</span>
              </p>
              <p class="language">
                language : <span class="language-text">Hindi</span>
              </p>
              <p class="area">area : <span class="area-text">3M</span></p>
            </div>
          </div>
          
        </div>
       
      </div>
      <div class="border-country">
      <p class="border">
        borders Country :
        <span class="border-country-text"
          >AFG,BGD,BTN,MMR,CHN,NPL,PAK,LKA</span>
      </p>
    </div>
    </main>     

  `;
homepage();

let searchCity = document.querySelector("#searchCountry");
let newSearchcity = document.querySelector(".newPageSearch");
let searchBtn = document.querySelector(".search-btn");
let newSearchbtn = document.querySelector(".find-btn");
let countryName = document.querySelector(".country-name");
let flagimg = document.querySelector(".flag-img");
let nativeName = document.querySelector(".native-name-text");
let population = document.querySelector(".population-text");
let region = document.querySelector(".region-text");
let subRegion = document.querySelector(".sub-region-text");
let capital = document.querySelector(".capital-text");
let currency = document.querySelector(".currency-text");
let language = document.querySelector(".language-text");
let area = document.querySelector(".area-text");
let borderCountry = document.querySelector(".border-country-text");
let backButton = document.querySelector(".back-btn");
let countryBox = document.querySelectorAll(".country-box");
let boxFlagImg = document.querySelectorAll(".country-flag");
let boxCountryName = document.querySelectorAll(".Country-name");
let boxNativename = document.querySelectorAll(".native-name");
let boxRegion = document.querySelectorAll(".country-region");
let boxSubReigion = document.querySelectorAll(".country-sub-region");
let boxBorderCountry = document.querySelectorAll(".country-border");
let boxCapitalName = document.querySelectorAll(".country-capital");
let boxPopulation = document.querySelectorAll(".country-population");
let boxLanguage = document.querySelectorAll(".country-language");
let boxCurrency = document.querySelectorAll(".country-currency");
let boxArea = document.querySelectorAll(".country-area");
let modal = document.querySelector(".modal");
let countryNameDetail = document.querySelectorAll(".country-allname");
let alltext = document.querySelectorAll(".text");
let loading = document.querySelector(".nation-text");

function homepage() {
  let DataCountryBar = document.querySelectorAll(
    '[data-country-part="country-part"]'
  );
  let countryContainer = document.querySelector(".country-container");

  DataCountryBar.forEach((el) => {
    /////////////////////select Element ////////////////////////
    const dataCountryFlag = el.dataset.flagImg;
    const dataCountryName = el.dataset.countryName;
    const dataNativeName = el.dataset.nativeName;
    const dataLocationImg = el.dataset.locationImg;
    const dataRegion = el.dataset.region;
    const dataRegionName = el.dataset.regionName;
    const dataCapitalImg = el.dataset.capitalImg;
    const dataCapital = el.dataset.capital;
    const dataCapitalName = el.dataset.capitalName;
    const dataPopulationImg = el.dataset.populationImg;
    const dataPopulation = el.dataset.population;
    const dataPopulationNumber = el.dataset.populationNumber;
    const dataLanguageImg = el.dataset.languageImg;
    const dataLanguage = el.dataset.language;
    const datalanguageName = el.dataset.languageName;
    const dataCurrencyImg = el.dataset.currencyImg;
    const dataCurrency = el.dataset.currency;
    const dataCurrencyName = el.dataset.currencyName;
    const dataAreaImg = el.dataset.areaImg;
    const dataArea = el.dataset.area;
    const dataAreaNumber = el.dataset.areaNumber;

    /////////////////////create Element ////////////////////////
    let countryBox = document.createElement("div");
    let flagImg = document.createElement("img");
    let boxContent = document.createElement("div");
    let countryAllName = document.createElement("div");
    let countryName = document.createElement("h1");
    let nativeName = document.createElement("p");
    let iconImg = document.createElement("div");
    let locationIconImg = document.createElement("div");
    let locationContainer = document.createElement("li");
    let locationImg = document.createElement("img");
    let countryRegionContainer = document.createElement("div");
    let countryRegion = document.createElement("span");
    let countryRegionText = document.createElement("span");
    let capitalContainer = document.createElement("li");
    let capitalImg = document.createElement("img");
    let countrycapitalContainer = document.createElement("div");
    let countrycapital = document.createElement("span");
    let countrycapitalText = document.createElement("span");
    let populationContainer = document.createElement("li");
    let populationImg = document.createElement("img");
    let countrypopulationContainer = document.createElement("div");
    let countrypopulation = document.createElement("span");
    let countrypopulationText = document.createElement("span");
    let languageContainer = document.createElement("li");
    let languageImg = document.createElement("img");
    let countrylanguageContainer = document.createElement("div");
    let countrylanguage = document.createElement("span");
    let countrylanguageText = document.createElement("span");
    let currencyContainer = document.createElement("li");
    let currencyImg = document.createElement("img");
    let countrycurrencyContainer = document.createElement("div");
    let countrycurrency = document.createElement("span");
    let countrycurrencyText = document.createElement("span");
    let areaContainer = document.createElement("li");
    let areaImg = document.createElement("img");
    let countryareaContainer = document.createElement("div");
    let countryarea = document.createElement("span");
    let countryareaText = document.createElement("span");

    /////////////////////add class////////////////////////
    countryBox.classList.add("country-box");
    flagImg.classList.add("country-flag");
    boxContent.classList.add("box-content");
    countryAllName.classList.add("country-allname");
    countryName.classList.add("Country-name");
    nativeName.classList.add("native-name");
    iconImg.classList.add("icon-img");
    locationIconImg.classList.add("icon-img");
    locationContainer.classList.add("container");
    locationImg.classList.add("location-img");
    countryRegionContainer.classList.add("text", "region");
    countryRegion.classList.add("show", "region-name");
    countryRegionText.classList.add("hidden", "country-region");
    capitalContainer.classList.add("container");
    capitalImg.classList.add("capital-img");
    countrycapitalContainer.classList.add("text", "capital");
    countrycapital.classList.add("show");
    countrycapitalText.classList.add("hidden", "country-capital");
    populationContainer.classList.add("container");
    populationImg.classList.add("population-img");
    countrypopulationContainer.classList.add("text", "population");
    countrypopulation.classList.add("show");
    countrypopulationText.classList.add("hidden", "country-population");
    languageContainer.classList.add("container");
    languageImg.classList.add("language-img");
    countrylanguageContainer.classList.add("text", "language");
    countrylanguage.classList.add("show");
    countrylanguageText.classList.add("hidden", "country-language");
    currencyContainer.classList.add("container");
    currencyImg.classList.add("currency-img");
    countrycurrencyContainer.classList.add("text", "currency");
    countrycurrency.classList.add("show");
    countrycurrencyText.classList.add("hidden", "country-currency");
    areaContainer.classList.add("container");
    areaImg.classList.add("area-img");
    countryareaContainer.classList.add("text");
    countryarea.classList.add("show");
    countryareaText.classList.add("hidden", "country-area");

    /////////////////////add innerHtml ////////////////////////
    flagImg.src = dataCountryFlag;
    countryName.textContent = dataCountryName;
    nativeName.textContent = dataNativeName;
    locationImg.src = dataLocationImg;
    countryRegion.textContent = dataRegion;
    countryRegionText.textContent = dataRegionName;
    capitalImg.src = dataCapitalImg;
    countrycapital.textContent = dataCapital;
    countrycapitalText.textContent = dataCapitalName;
    populationImg.src = dataPopulationImg;
    countrypopulation.textContent = dataPopulation;
    countrypopulationText.textContent = dataPopulationNumber;
    languageImg.src = dataLanguageImg;
    countrylanguage.textContent = dataLanguage;
    countrylanguageText.textContent = datalanguageName;
    currencyImg.src = dataCurrencyImg;
    countrycurrency.textContent = dataCurrency;
    countrycurrencyText.textContent = dataCurrencyName;
    areaImg.src = dataAreaImg;
    countryarea.textContent = dataArea;
    countryareaText.textContent = dataAreaNumber;

    /////////////////////apend child ////////////////////////
    countryContainer.appendChild(countryBox);
    countryBox.appendChild(flagImg);
    countryBox.appendChild(boxContent);
    boxContent.appendChild(countryAllName);
    countryAllName.appendChild(countryName);
    countryAllName.appendChild(nativeName);
    boxContent.appendChild(iconImg);

    iconImg.appendChild(locationContainer);
    locationContainer.appendChild(locationImg);
    locationContainer.appendChild(countryRegionContainer);
    countryRegionContainer.appendChild(countryRegion);
    countryRegionContainer.appendChild(countryRegionText);

    iconImg.appendChild(capitalContainer);
    capitalContainer.appendChild(capitalImg);
    capitalContainer.appendChild(countrycapitalContainer);
    countrycapitalContainer.appendChild(countrycapital);
    countrycapitalContainer.appendChild(countrycapitalText);

    iconImg.appendChild(populationContainer);
    populationContainer.appendChild(populationImg);
    populationContainer.appendChild(countrypopulationContainer);
    countrypopulationContainer.appendChild(countrypopulation);
    countrypopulationContainer.appendChild(countrypopulationText);

    iconImg.appendChild(languageContainer);
    languageContainer.appendChild(languageImg);
    languageContainer.appendChild(countrylanguageContainer);
    countrylanguageContainer.appendChild(countrylanguage);
    countrylanguageContainer.appendChild(countrylanguageText);

    iconImg.appendChild(currencyContainer);
    currencyContainer.appendChild(currencyImg);
    currencyContainer.appendChild(countrycurrencyContainer);
    countrycurrencyContainer.appendChild(countrycurrency);
    countrycurrencyContainer.appendChild(countrycurrencyText);

    iconImg.appendChild(areaContainer);
    areaContainer.appendChild(areaImg);
    areaContainer.appendChild(countryareaContainer);
    countryareaContainer.appendChild(countryarea);
    countryareaContainer.appendChild(countryareaText);
  });
}

function addPage() {
  newPage.style.display = "block";
}

function removePage() {
  newPage.style.display = "none";
  searchCity.value = "";
}

searchBtn.addEventListener("click", countryDetail);
newSearchbtn.addEventListener("click", countryDetailNew);

backButton.addEventListener("click", function () {
  removePage();
});

searchCity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    countryDetail();
  }
});
newSearchcity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    countryDetailNew();
  }
});

let data = [];

function countryDetail() {
  someCountryCondition();
  data.unshift(searchCity.value);
  if (searchCity.value == searchCity.value.substring(0, 2)) {
    alert("please enter correct country name");
  } else if (searchCity.value == "") {
    alert("pls enter country name");
  } else {
    scanApi();
    loading.innerHTML = `<img src="https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" alt="" style="
    height: 59px ">`;
  }
  setLocalHistory();
}

function countryBoxDetail() {
  data.unshift(searchCity.value);
  scanApi();
  document.querySelector(".main-container").style.display = "none";
  document.querySelector(
    ".loading-container"
  ).innerHTML = `<img src="https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" alt=""  class = "loading-img" style= " background-color: transparent;">`;
}
function countryDetailNew() {
  someCountryCondition();
  data.unshift(newSearchcity.value);
  if (newSearchcity.value == newSearchcity.value.substring(0, 2)) {
    alert("please enter correct country name");
  } else if (newSearchcity.value == "") {
    alert("pls enter country name");
  } else {
    scanApi();
    document.querySelector(".main-container").style.display = "none";
    document.querySelector(
      ".loading-container"
    ).innerHTML = `<img src="https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" alt=""  class = "loading-img" style= " background-color: transparent;">`;
  }
  setLocalHistoryNew();
}

function someCountryCondition() {
  if (searchCity.value == "america" || searchCity.value == "America") {
    searchCity.value = "United States of America";
  }
  if (searchCity.value == "england" || searchCity.value == "England") {
    searchCity.value = "United kingdom";
  }
}

function scanApi() {
  fetch(`https://restcountries.com/v2/name/${data[0]} `)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.status != 404) {
        addPage();
        loading.textContent = "Discover the world of countries";
        document.querySelector(".loading-container").style.display = "none";
        document.querySelector(".main-container").style.display = "block";
        if (searchCity.value == "china" || searchCity.value == "China") {
          response.length = 1;
        }
        {
          countryName.textContent = response[response.length - 1].name;
          flagimg.src = response[response.length - 1].flag;
          if (Number(response[response.length - 1].population) > 1000000) {
            population.textContent = `${Math.trunc(
              Number(response[response.length - 1].population) / 1000000
            )}M`;
          } else {
            population.textContent = response[response.length - 1].population;
          }
          nativeName.textContent = response[response.length - 1].nativeName;
          region.textContent = response[response.length - 1].region;
          subRegion.textContent = response[response.length - 1].subregion;
          capital.textContent = response[response.length - 1].capital;
          currency.textContent =
            response[response.length - 1].currencies[0].name;
          language.textContent =
            response[response.length - 1].languages[0].name;
          area.textContent = `${response[response.length - 1].area} km square`;
          borderCountry.textContent = response[response.length - 1].borders;

          flagimg.src = response[response.length - 1].flag;

          if (Number(response[response.length - 1].population) > 1000000) {
            population.textContent = `${Math.trunc(
              Number(response[response.length - 1].population) / 1000000
            )}M`;
          } else {
            population.textContent = response[response.length - 1].population;
          }

          if (borderCountry.textContent == "") {
            borderCountry.textContent = "Country border the ocean";
          }
        }
      } else {
        alert("pls enter correct country name ");
        loading.textContent = "Discover the world of countries";
        document.querySelector(".loading-container").style.display = "none";
        document.querySelector(".main-container").style.display = "block";
      }
    });
}


 
function setNewpageLocalstorage() {
  scanApi();
}

for (let i = 0; i < countryBox.length; i++) {
  countryBox[i].addEventListener("click", function () {
    searchCity.value = boxCountryName[i].textContent;
    countryBoxDetail();
    addPage();
    setLocalHistory()
  });
}
console.log(countryBox);
//auto complete  suggestion

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/

var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

autocomplete(searchCity, countries);

function setLocalHistory() {
  if (searchCity.value != searchCity.value.substring(0, 2)) {
    newData.unshift(searchCity.value);
  }
  if (newData != "") {
    localStorage.setItem("recentSearch", JSON.stringify(newData));
  }
  // console.log(newData);
}
function setLocalHistoryNew() {
  if (newSearchcity.value != newSearchcity.value.substring(0, 2)) {
    newData.unshift(newSearchcity.value);
  }
  if (newData != "") {
    localStorage.setItem("recentSearch", JSON.stringify(newData));
  }
}


if (recentSearch !== "") {
 
      for (let i = 0; i < recentSearch.length; i++) {
        fetch(`https://restcountries.com/v2/name/${recentSearch[i]}`)
        .then((response) => response.json())
        .then((response) => {
        if (recentSearch[i] == "China" || recentSearch[i] == "china") {
          response.length = 1;
          console.log(response.length);
        }
        if (response.status != "404") {
          boxCountryName[i].textContent = response[response.length - 1].name;
          boxNativename[i].textContent =
            response[response.length - 1].nativeName;

          boxFlagImg[i].src = response[response.length - 1].flags.png;
          // console.log(response[response.length - 1].flags.png);

          if (Number(response[response.length - 1].population) > 1000000) {
            boxPopulation[i].textContent = `${Math.trunc(
              Number(response[response.length - 1].population) / 1000000
            )}M`;
          } else {
            boxPopulation[i].textContent =
              response[response.length - 1].population;
          }

          boxRegion[i].textContent = response[response.length - 1].region;

          boxCapitalName[i].textContent =
            response[response.length - 1].capital;

          boxCurrency[i].textContent =
            response[response.length - 1].currencies[0].name;

          boxLanguage[i].textContent =
            response[response.length - 1].languages[0].name;

          boxArea[i].textContent = `${
            response[response.length - 1].area
          } km sq`;
        }
      })
    };
}
