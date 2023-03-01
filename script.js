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
let loading = document.querySelector(".nation-text")

function addPage() {
    newPage.style.display = "block";
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
    countryDetail();
    loading.textContent = "loading ................"
}
function newcityInfo() {
    countryDetailNew();
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
      console.log(response);
     
      if (
        response.status !== 404 &&
        searchCity.value != searchCity.value.substring(0, 3)
      ) {
        addPage();
        loading.textContent = 'Discover the world of countries'
        if (searchCity.value == "china" || searchCity.value == "China") {
          countryName.textContent = response[0].name;
          flagimg.src = response[0].flag;
          nativeName.textContent = response[0].nativeName;
          region.textContent = response[0].region;
          subRegion.textContent = response[0].subregion;
          capital.textContent = response[0].capital;
          currency.textContent = response[0].currencies[0].name;
          language.textContent = response[0].languages[0].name;
          area.textContent = `${response[0].area} km square`
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
          area.textContent = `${response[response.length - 1].area} km square`;
          borderCountry.textContent = response[response.length - 1].borders;
          
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
        loading.textContent = 'Discover the world of countries'
       
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
      console.log(response);
      if (
        response.status !== 404 &&
        newSearchcity.value != newSearchcity.value.substring(0, 3)
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


//auto complete  suggestion



function autocomplete(inp, arr) {

  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
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
          b.addEventListener("click", function(e) {
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
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

autocomplete(searchCity, countries);