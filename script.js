let newPage = document.querySelector(".newPage");
let recentSearch = JSON.parse(localStorage.getItem("recentSearch"));
let countrySearch = JSON.parse(localStorage.getItem("countrySearch"));

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
  loading.style.display = "none";
}

backButton.addEventListener("click", function () {
  removePage();
});

searchCity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    countryDetail(searchCity);
  }
});
newSearchcity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    countryDetail(newSearchcity);
  }
});

function countryDetail(cityName) {
  someCountryCondition();
  if (cityName.value == cityName.value.substring(0, 2)) {
    alert("please enter correct country name");
  } else if (cityName.value == "") {
    alert("pls enter country name");
  } else {
   
    if (cityName !== searchCity) {
      scanApi(newSearchcity);
    }
    else{
      scanApi(searchCity);
    }
    loading.innerHTML = `<img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="" style="
    height: 59px ">`;
  }
  // setLocalHistory(searchCity);
  // setLocalHistory(newSearchcity);
}

searchBtn.addEventListener("click", function () {
  countryDetail(searchCity);
});
newSearchbtn.addEventListener("click", function () {
  countryDetail(newSearchcity);
});

function someCountryCondition() {
  if (
    searchCity.value == "america" ||
    searchCity.value == "America" ||
    newSearchcity.value == "America" ||
    newSearchcity.value == "america"
  ) {
    searchCity.value = "United States of America";
    newSearchcity.value = "United States of America";
  }
  if (
    searchCity.value == "england" ||
    searchCity.value == "England" ||
    newSearchcity.value == "England" ||
    newSearchcity.value == "england"
  ) {
    searchCity.value = "United kingdom";
    newSearchcity.value = "United kingdom";
  }
}

function scanApi(cityName) {
  fetch(`https://restcountries.com/v2/name/${cityName.value} `)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.status !== 404) {
        const values = response.values();
        for (const value of values) {
          if (
            value.name.toLowerCase().substring(0, 3) ==
            cityName.value.toLowerCase().substring(0, 3)
          ) {
            countryName.textContent = value.name;

            flagimg.src = value.flag;

            if (Number(value.population) > 1000000)
             { 
              population.textContent = `${Math.trunc(Number(value.population) / 1000000)}M`;
            }
             else {
              population.textContent = value.population;
            }
            nativeName.textContent = value.nativeName;

            region.textContent = value.region;

            subRegion.textContent = value.subregion;

            capital.textContent = value.capital;

            currency.textContent = value.currencies[0].name;

            language.textContent = value.languages[0].name;

            area.textContent = `${value.area} km square`;

            borderCountry.textContent = value.borders;

            if (Number(value.population) > 1000000) {
              population.textContent = `${Math.trunc(
                Number(value.population) / 1000000
              )}M`;
            } else {
              population.textContent = value.population;
            }

            if (borderCountry.textContent == "") {
              borderCountry.textContent = "Country border the ocean";
            }

            function setLocalStorage() {
              for (let i = 0; i < recentSearch.length; i++) {
                boxCountryName[i].textContent = value.name;
                boxNativename[i].textContent = value.nativeName;

                boxFlagImg[i].src = value.flags.png;
                // console.log(value.flags.png);

                if (Number(value.population) > 1000000) {
                  boxPopulation[i].textContent = `${Math.trunc(
                    Number(value.population) / 1000000
                  )}M`;
                } else {
                  boxPopulation[i].textContent = value.population;
                }

                boxRegion[i].textContent = value.region;

                boxCapitalName[i].textContent = value.capital;

                boxCurrency[i].textContent = value.currencies[0].name;

                boxLanguage[i].textContent = value.languages[0].name;

                boxArea[i].textContent = `${value.area} km sq`;
              }
            }
            setLocalStorage();
            addPage();
          }
        }
      } else if (response.status == 404) {
        alert("pls enter correct country name");
        loading.style.display = "none";
        searchCity.value = ""
      }
    }).catch(() => {
      console.log('server error: ' + 404);
    })

  // loading.textContent = "Discover the world of countries";
  // document.querySelector(".main-container").style.display = "block";
  // document.querySelector(".loading-container").style.display = "none";
}
for (let i = 0; i < countryBox.length; i++) {
  countryBox[i].addEventListener("click", function () {
    searchCity.value = boxCountryName[i].textContent;
    addPage();
    countryDetail(searchCity);
  });
}

function setLocalHistory(cityName) {
  if (cityName.value != cityName.value.substring(0, 2)) {
    newData.unshift(cityName.value);
  }
  if (newData !== "") {
    localStorage.setItem("recentSearch", JSON.stringify(newData));
  }
}
