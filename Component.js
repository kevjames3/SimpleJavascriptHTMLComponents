function start(){
  function LookupController(htmlElement){
    let self = this;
   
    self.choseOption = (clickEvent) => {
      choseOption = true;
      inputElement.value = clickEvent.target.innerText;
      self.render();
    }

    self.updateString = () => {
      choseOption = false;
      self.render();
    }
    
    self.render = () => {
      currentString = inputElement.value;

      optionListElement.innerText = "";
      optionListElement.classList.remove("hidden");
      if(!choseOption) {
        let list = autocomplete.filter(currentString);
        if(currentString.length > 0 && list.length > 0){
          for(let item of list){
            let listItem = document.createElement("span");
            listItem.classList.add("listItem");
            listItem.innerText = item;
            listItem.addEventListener("click", self.choseOption);
            optionListElement.appendChild(listItem);
          }
        } else {
          optionListElement.classList.add("hidden");
        }
      } else {
        optionListElement.classList.add("hidden");
      }

      return self;
    }

    let autocomplete = new Autocomplete(["Afghanistan",
                      "Albania",
                      "Algeria",
                      "Andorra",
                      "Angola",
                      "Antigua & Deps",
                      "Argentina",
                      "Armenia",
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
                      "Bhutan",
                      "Bolivia",
                      "Bosnia Herzegovina",
                      "Botswana",
                      "Brazil",
                      "Brunei",
                      "Bulgaria",
                      "Burkina",
                      "Burundi",
                      "Cambodia",
                      "Cameroon",
                      "Canada",
                      "Cape Verde",
                      "Central African Rep",
                      "Chad",
                      "Chile",
                      "China",
                      "Colombia",
                      "Comoros",
                      "Congo",
                      "Congo {Democratic Rep}",
                      "Costa Rica",
                      "Croatia",
                      "Cuba",
                      "Cyprus",
                      "Czech Republic",
                      "Denmark",
                      "Djibouti",
                      "Dominica",
                      "Dominican Republic",
                      "East Timor",
                      "Ecuador",
                      "Egypt",
                      "El Salvador",
                      "Equatorial Guinea",
                      "Eritrea",
                      "Estonia",
                      "Ethiopia",
                      "Fiji",
                      "Finland",
                      "France",
                      "Gabon",
                      "Gambia",
                      "Georgia",
                      "Germany",
                      "Ghana",
                      "Greece",
                      "Grenada",
                      "Guatemala",
                      "Guinea",
                      "Guinea-Bissau",
                      "Guyana",
                      "Haiti",
                      "Honduras",
                      "Hungary",
                      "Iceland",
                      "India",
                      "Indonesia",
                      "Iran",
                      "Iraq",
                      "Ireland {Republic}",
                      "Israel",
                      "Italy",
                      "Ivory Coast",
                      "Jamaica",
                      "Japan",
                      "Jordan",
                      "Kazakhstan",
                      "Kenya",
                      "Kiribati",
                      "Korea North",
                      "Korea South",
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
                      "Morocco",
                      "Mozambique",
                      "Myanmar, {Burma}",
                      "Namibia",
                      "Nauru",
                      "Nepal",
                      "Netherlands",
                      "New Zealand",
                      "Nicaragua",
                      "Niger",
                      "Nigeria",
                      "Norway",
                      "Oman",
                      "Pakistan",
                      "Palau",
                      "Panama",
                      "Papua New Guinea",
                      "Paraguay",
                      "Peru",
                      "Philippines",
                      "Poland",
                      "Portugal",
                      "Qatar",
                      "Romania",
                      "Russian Federation",
                      "Rwanda",
                      "St Kitts & Nevis",
                      "St Lucia",
                      "Saint Vincent & the Grenadines",
                      "Samoa",
                      "San Marino",
                      "Sao Tome & Principe",
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
                      "South Sudan",
                      "Spain",
                      "Sri Lanka",
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
                      "Togo",
                      "Tonga",
                      "Trinidad & Tobago",
                      "Tunisia",
                      "Turkey",
                      "Turkmenistan",
                      "Tuvalu",
                      "Uganda",
                      "Ukraine",
                      "United Arab Emirates",
                      "United Kingdom",
                      "United States",
                      "Uruguay",
                      "Uzbekistan",
                      "Vanuatu",
                      "Vatican City",
                      "Venezuela",
                      "Vietnam",
                      "Yemen",
                      "Zambia",
                      "Zimbabwe",]);
    let choseOption = false;
    let currentString = "";

    let holderElement = document.createElement("div");
    holderElement.classList.add("autocomplete");
    htmlElement.appendChild(holderElement);

    //initialize element
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.addEventListener("input", self.updateString);
    inputElement.value = currentString;
    holderElement.appendChild(inputElement);

    let optionListElement = document.createElement("div");
    optionListElement.innerText = "";
    optionListElement.classList.add("hidden");
    optionListElement.classList.add("options");
    holderElement.appendChild(optionListElement);

    return self;
  }
  
  let element = document.getElementById("Autocomplete");
  (new LookupController(element).render());
}