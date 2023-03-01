let newPage = document.querySelector(".newPage");

newPage.innerHTML = `
  <nav>
      <div class="logo">
        <p class="logo-text">Where in the world?</p>
      </div>
    </nav>
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
          >AFG,BGD,BTN,MMR,CHN,NPL,PAK,LKA</span
        >
      </p>
    </div>
    </main>     

  `;
let searchCity = document.querySelector("#searchCountry");
let newSearchcity = document.querySelector(".newPageSearch");
// let searchCity1 = document.querySelector("#searchCountry");
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

function addPage() {
  setTimeout(() => {
    newPage.style.display = "block";
  }, 10);
}

function removePage() {
  newPage.style.display = "none";
  searchCity.value = "";
}

searchBtn.addEventListener("click", cityInfo);
newSearchbtn.addEventListener("click", newcityInfo);

backButton.addEventListener("click", function(){
  removePage()
  window.location.reload()
});

searchCity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    cityInfo();
  }
});
newSearchcity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    newcityInfo();
  }
});

function cityInfo() {
  if (searchCity.value != "") {
    countryDetail();
    // addPage();
  }
}
function newcityInfo() {
  if (newSearchcity.value != "") {
    countryDetailNew();
  }
}



function countryDetail() {
  if (searchCity.value == "america" || searchCity.value == "America") {
    searchCity.value = "United States of America";
  }
  if (searchCity.value == "england" || searchCity.value == "England") {
    searchCity.value = "United kingdom";
    console.log(searchCity.value);
  }

  fetch(`https://restcountries.com/v2/name/${searchCity.value}`)
    .then((response) => response.json())
    .then((response) => {
      if (
        response.status !== 404 &&
        searchCity.value != searchCity.value.substring(0, 4)
      ) {
        addPage();
        if (searchCity.value == "china" || searchCity.value == "China") {
          countryName.textContent = response[0].name;
          flagimg.src = response[0].flag;
          nativeName.textContent = response[0].nativeName;
          region.textContent = response[0].region;
          subRegion.textContent = response[0].subregion;
          capital.textContent = response[0].capital;
          currency.textContent = response[0].currencies[0].name;
          language.textContent = response[0].languages[0].name;
          area.textContent = response[0].area;
          borderCountry.textContent = response[0].borders;
          console.log(response[0].nativeName);
        } else {
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
          area.textContent = response[response.length - 1].area;
          borderCountry.textContent = response[response.length - 1].borders;
          // countryName.textContent = response[response.length - 1].name;
          countryName.textContent = searchCity.value;
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
      }
    });
}



function countryDetailNew() {
  if (newSearchcity.value == "america") {
    newSearchcity.value = "United States of America";
  }
  if (newSearchcity.value == "england" || newSearchcity.value == "England") {
    newSearchcity.value = "United kingdom";
    countryName.textContent = "England";
  }
  fetch(`https://restcountries.com/v2/name/${newSearchcity.value}`)
    .then((response) => response.json())
    .then((response) => {
      if (
        response.status !== 404 &&
        newSearchcity.value != newSearchcity.value.substring(0, 4)
      ) {
        if (newSearchcity.value == "china" || newSearchcity.value == "China") {
          countryName.textContent = response[0].name;
          flagimg.src = response[0].flag;
          nativeName.textContent = response[0].nativeName;
          region.textContent = response[0].region;
          subRegion.textContent = response[0].subregion;
          capital.textContent = response[0].capital;
          currency.textContent = response[0].currencies[0].name;
          language.textContent = response[0].languages[0].name;
          area.textContent = response[0].area;
          borderCountry.textContent = response[0].borders;
        } else {
          flagimg.src = response[response.length - 1].flag;
          countryName.textContent = newSearchcity.value;

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
          area.textContent = response[response.length - 1].area;
          borderCountry.textContent = response[response.length - 1].borders;
          // countryName.textContent = response[response.length - 1].name;

          if (Number(response[response.length - 1].population) > 1000000) {
            population.textContent = `${Math.trunc(
              Number(response[response.length - 1].population) / 1000000
            )}M`;
          } else {
            population.textContent = response[response.length - 1].population;
          }
        }
      }
      else{
        alert("please enter a valid country name")
      }
    });
  if (borderCountry.textContent == "") {
    borderCountry.textContent = "Country border the ocean";
  }
}





if (window.screen.width <= 920) {
  for (let i = 0; i < countryBox.length; i++) {
    boxFlagImg[i].addEventListener("click", function () {
      addPage();
      searchCity.value = boxCountryName[i].textContent;
      countryDetail();

    });

    countryNameDetail[i].addEventListener("click", function () {
      addPage();
      searchCity.value = boxCountryName[i].textContent;
      countryDetail();
    });
  }
} else {
  for (let i = 0; i < countryBox.length; i++) {
    countryBox[i].addEventListener("click", function () {
      addPage();
      searchCity.value = boxCountryName[i].textContent;
      countryDetail();
    });
  }

}
