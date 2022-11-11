disableButton(document.querySelector('#formSubmitted'))

let statesObject = [
  {
    "State": "Alabama",
    "abbr": "AL",
    "sizeRank": 22,
    "avgHouseCost": 207627,
    "medianRentACS": 792,
    "avgRentZillow": 1461,
    "minWage": 7.25
   },
   {
    "State": "Alaska",
    "abbr": "AK",
    "sizeRank": 46,
    "avgHouseCost": 328819,
    "medianRentACS": 1244,
    "avgRentZillow": 1489,
    "minWage": 9.89
   },
   {
    "State": "Arizona",
    "abbr": "AZ",
    "sizeRank": 15,
    "avgHouseCost": 448325,
    "medianRentACS": 1052,
    "avgRentZillow": 2195,
    "minWage": 11
   },
   {
    "State": "Arkansas",
    "abbr": "AR",
    "sizeRank": 31,
    "avgHouseCost": 179951,
    "medianRentACS": 745,
    "avgRentZillow": 1235,
    "minWage": 9.25
   },
   {
    "State": "California",
    "abbr": "CA",
    "sizeRank": 0,
    "avgHouseCost": 788679,
    "medianRentACS": 1503,
    "avgRentZillow": 3000,
    "minWage": 14
   },
   {
    "State": "Colorado",
    "abbr": "CO",
    "sizeRank": 21,
    "avgHouseCost": 586317,
    "medianRentACS": 1271,
    "avgRentZillow": 2250,
    "minWage": 11.1
   },
   {
    "State": "Connecticut",
    "abbr": "CT",
    "sizeRank": 28,
    "avgHouseCost": 361501,
    "medianRentACS": 1180,
    "avgRentZillow": 1485,
    "minWage": 10.1
   },
   {
    "State": "Delaware",
    "abbr": "DE",
    "sizeRank": 44,
    "avgHouseCost": 358310,
    "medianRentACS": 1130,
    "avgRentZillow": 1610,
    "minWage": 8.75
   },
   {
    "State": "Florida",
    "abbr": "FL",
    "sizeRank": 3,
    "avgHouseCost": 402837,
    "medianRentACS": 1175,
    "avgRentZillow": 2575,
    "minWage": 11.00
   },
   {
    "State": "Georgia",
    "abbr": "GA",
    "sizeRank": 8,
    "avgHouseCost": 319431,
    "medianRentACS": 1006,
    "avgRentZillow": 1999,
    "minWage": 7.25
   },
   {
    "State": "Hawaii",
    "abbr": "HI",
    "sizeRank": 39,
    "avgHouseCost": 909473,
    "medianRentACS": 1617,
    "avgRentZillow": 2850,
    "minWage": 10.1
   },
   {
    "State": "Idaho",
    "abbr": "ID",
    "sizeRank": 38,
    "avgHouseCost": 472272,
    "medianRentACS": 853,
    "avgRentZillow": 2073,
    "minWage": 7.25
   },
   {
    "State": "Illinois",
    "abbr": "IL",
    "sizeRank": 4,
    "avgHouseCost": 267677,
    "medianRentACS": 1010,
    "avgRentZillow": 1650,
    "minWage": 8.25
   },
   {
    "State": "Indiana",
    "abbr": "IN",
    "sizeRank": 14,
    "avgHouseCost": 221977,
    "medianRentACS": 826,
    "avgRentZillow": 1395,
    "minWage": 7.25
   },
   {
    "State": "Iowa",
    "abbr": "IA",
    "sizeRank": 29,
    "avgHouseCost": 192224,
    "medianRentACS": 789,
    "avgRentZillow": 1026,
    "minWage": 7.25
   },
   {
    "State": "Kansas",
    "abbr": "KS",
    "sizeRank": 32,
    "avgHouseCost": 207207,
    "medianRentACS": 520,
    "avgRentZillow": 1056,
    "minWage": 7.25
   },
   {
    "State": "Kentucky",
    "abbr": "KY",
    "sizeRank": 25,
    "avgHouseCost": 198926,
    "medianRentACS": 763,
    "avgRentZillow": 1250,
    "minWage": 7.25
   },
   {
    "State": "Louisiana",
    "abbr": "LA",
    "sizeRank": 24,
    "avgHouseCost": 215360,
    "medianRentACS": 866,
    "avgRentZillow": 1395,
    "minWage": 7.25
   },
   {
    "State": "Maine",
    "abbr": "ME",
    "sizeRank": 40,
    "avgHouseCost": 365458,
    "medianRentACS": 853,
    "avgRentZillow": 1875,
    "minWage": 11
   },
   {
    "State": "Maryland",
    "abbr": "MD",
    "sizeRank": 18,
    "avgHouseCost": 406436,
    "medianRentACS": 1392,
    "avgRentZillow": 1844,
    "minWage": 10.1
   },
   {
    "State": "Massachusetts",
    "abbr": "MA",
    "sizeRank": 13,
    "avgHouseCost": 591277,
    "medianRentACS": 1282,
    "avgRentZillow": 2900,
    "minWage": 12
   },
   {
    "State": "Michigan",
    "abbr": "MI",
    "sizeRank": 7,
    "avgHouseCost": 237156,
    "medianRentACS": 871,
    "avgRentZillow": 1335,
    "minWage": 9.25
   },
   {
    "State": "Minnesota",
    "abbr": "MN",
    "sizeRank": 20,
    "avgHouseCost": 334858,
    "medianRentACS": 977,
    "avgRentZillow": 1537,
    "minWage": 9.86
   },
   {
    "State": "Mississippi",
    "abbr": "MS",
    "sizeRank": 30,
    "avgHouseCost": 166096,
    "medianRentACS": 780,
    "avgRentZillow": 1410,
    "minWage": 7.25
   },
   {
    "State": "Missouri",
    "abbr": "MO",
    "sizeRank": 17,
    "avgHouseCost": 231048,
    "medianRentACS": 830,
    "avgRentZillow": 1300,
    "minWage": 8.6
   },
   {
    "State": "Montana",
    "abbr": "MT",
    "sizeRank": 43,
    "avgHouseCost": 453554,
    "medianRentACS": 810,
    "avgRentZillow": 1800,
    "minWage": 8.5
   },
   {
    "State": "Nebraska",
    "abbr": "NE",
    "sizeRank": 37,
    "avgHouseCost": 240435,
    "medianRentACS": 833,
    "avgRentZillow": 1186,
    "minWage": 9
   },
   {
    "State": "Nevada",
    "abbr": "NV",
    "sizeRank": 34,
    "avgHouseCost": 467453,
    "medianRentACS": 1107,
    "avgRentZillow": 2150,
    "minWage": 8.25
   },
   {
    "State": "New Hampshire",
    "abbr": "NH",
    "sizeRank": 41,
    "avgHouseCost": 436623,
    "medianRentACS": 1111,
    "avgRentZillow": 1930,
    "minWage": 7.25
   },
   {
    "State": "New Jersey",
    "abbr": "NJ",
    "sizeRank": 10,
    "avgHouseCost": 470843,
    "medianRentACS": 1334,
    "avgRentZillow": 2200,
    "minWage": 8.85
   },
   {
    "State": "New Mexico",
    "abbr": "NM",
    "sizeRank": 35,
    "avgHouseCost": 296833,
    "medianRentACS": 844,
    "avgRentZillow": 1595,
    "minWage": 7.5
   },
   {
    "State": "New York",
    "abbr": "NY",
    "sizeRank": 2,
    "avgHouseCost": 407788,
    "medianRentACS": 1280,
    "avgRentZillow": 3400,
    "minWage": 11.1
   },
   {
    "State": "North Carolina",
    "abbr": "NC",
    "sizeRank": 9,
    "avgHouseCost": 322986,
    "medianRentACS": 907,
    "avgRentZillow": 1850,
    "minWage": 7.25
   },
   {
    "State": "North Dakota",
    "abbr": "ND",
    "sizeRank": 47,
    "avgHouseCost": 277716,
    "medianRentACS": 826,
    "avgRentZillow": 831,
    "minWage": 7.25
   },
   {
    "State": "Ohio",
    "abbr": "OH",
    "sizeRank": 6,
    "avgHouseCost": 212539,
    "medianRentACS": 808,
    "avgRentZillow": 1300,
    "minWage": 8.55
   },
   {
    "State": "Oklahoma",
    "abbr": "OK",
    "sizeRank": 27,
    "avgHouseCost": 182683,
    "medianRentACS": 810,
    "avgRentZillow": 1400,
    "minWage": 7.25
   },
   {
    "State": "Oregon",
    "abbr": "OR",
    "sizeRank": 26,
    "avgHouseCost": 524718,
    "medianRentACS": 1110,
    "avgRentZillow": 1854,
    "minWage": 10.75
   },
   {
    "State": "Pennsylvania",
    "abbr": "PA",
    "sizeRank": 5,
    "avgHouseCost": 266883,
    "medianRentACS": 938,
    "avgRentZillow": 1525,
    "minWage": 7.25
   },
   {
    "State": "Rhode Island",
    "abbr": "RI",
    "sizeRank": 42,
    "avgHouseCost": 437226,
    "medianRentACS": 1004,
    "avgRentZillow": 2150,
    "minWage": 10.5
   },
   {
    "State": "South Carolina",
    "abbr": "SC",
    "sizeRank": 23,
    "avgHouseCost": 295598,
    "medianRentACS": 894,
    "avgRentZillow": 1775,
    "minWage": 7.25
   },
   {
    "State": "South Dakota",
    "abbr": "SD",
    "sizeRank": 45,
    "avgHouseCost": 294696,
    "medianRentACS": 747,
    "avgRentZillow": 1025,
    "minWage": 9.1
   },
   {
    "State": "Tennessee",
    "abbr": "TN",
    "sizeRank": 16,
    "avgHouseCost": 303453,
    "medianRentACS": 869,
    "avgRentZillow": 1860,
    "minWage": 7.25
   },
   {
    "State": "Texas",
    "abbr": "TX",
    "sizeRank": 1,
    "avgHouseCost": 315235,
    "medianRentACS": 1045,
    "avgRentZillow": 1886,
    "minWage": 7.25
   },
   {
    "State": "Utah",
    "abbr": "UT",
    "sizeRank": 33,
    "avgHouseCost": 572971,
    "medianRentACS": 1037,
    "avgRentZillow": 2000,
    "minWage": 7.25
   },
   {
    "State": "Vermont",
    "abbr": "VT",
    "sizeRank": 48,
    "avgHouseCost": 356639,
    "medianRentACS": 985,
    "avgRentZillow": 1900,
    "minWage": 10.78
   },
   {
    "State": "Virginia",
    "abbr": "VA",
    "sizeRank": 11,
    "avgHouseCost": 375785,
    "medianRentACS": 1234,
    "avgRentZillow": 1997,
    "minWage": 7.25
   },
   {
    "State": "Washington",
    "abbr": "WA",
    "sizeRank": 12,
    "avgHouseCost": 624275,
    "medianRentACS": 1258,
    "avgRentZillow": 2195,
    "minWage": 12
   },
   {
    "State": "West Virginia",
    "abbr": "WV",
    "sizeRank": 36,
    "avgHouseCost": 139168,
    "medianRentACS": 725,
    "avgRentZillow": 899,
    "minWage": 8.75
   },
   {
    "State": "Wisconsin",
    "abbr": "WI",
    "sizeRank": 19,
    "avgHouseCost": 265055,
    "medianRentACS": 856,
    "avgRentZillow": 1100,
    "minWage": 7.25
   },
   {
    "State": "Wyoming",
    "abbr": "WY",
    "sizeRank": 50,
    "avgHouseCost": 323793,
    "medianRentACS": 855,
    "avgRentZillow": 1100,
    "minWage": 7.25
   }
]

//event function for non map selection of state
const stateInput = document.querySelector('#stateInput')

stateInput.addEventListener('change', selectedInput)

function selectedInput(event){
  getData(event.target.value)
}

//"The Facts" function that brings data up after map click event, or drop down box is used 
const stateInfo = document.querySelector('.stateInfo')
const removeMe = document.querySelector('#removeMe')

function getData(state){
  //removes hidden class from list
  stateInfo.classList.remove("hidden")
  let stateObject = statesObject.find(x => x.abbr == state)

  let wage = stateObject.minWage

  let wageConversion = {
    Yearly: 2080,
    Monthly: 173.33,
    Weekly: 40,
    Hourly: 1
  }
  wageConversion.reduce = function(freq, conversion){
    return wage / (freq == "yearly" ? this.Yearly : freq == "monthly" ? this.Monthly : freq == "weekly" ? this.Weekly : this.Hourly) * conversion
  }

  let wageInWeekly = wageConversion.reduce("hourly", wageConversion.Weekly) 
  let wageInMonthly = wageConversion.reduce("hourly", wageConversion.Monthly) 
  let wageInYearly = wageConversion.reduce("hourly", wageConversion.Yearly) 
  let downpayment = stateObject.avgHouseCost * .2
  let workedHours = Math.round(downpayment / stateObject.minWage)
  let houseYears = (workedHours / 2080).toFixed(2)
  let rentTime = stateObject.avgRentZillow / stateObject.minWage
  let extraTime = (rentTime - 173.8).toFixed(2)
  let extraMoney = Math.abs(extraTime * stateObject.minWage)

  stateDetails.innerText = `${stateObject.State} - By the Numbers`
  minimumWage.innerText = `The minimum wage of ${stateObject.State} is ${currency(stateObject.minWage)} an hour. 
  (${currency(wageInWeekly)} per week, or ${currency(wageInMonthly)} per month, or ${currency(wageInYearly)} per year)`
  house.innerText = `The average house costs ${currency(stateObject.avgHouseCost)}.`
  houseHours.innerText = `It would take ${workedHours} hours (or ${houseYears} years at 40 hours a week) to save a 20% down payment on minimum wage.`
  rent.innerText = `The average cost to rent is ${currency(stateObject.avgRentZillow)}.`
  rentHours.innerText = `It would take ${rentTime.toFixed(2)} hours worked a month to pay rent on minimum wage. ` + ( extraTime > 0 ? `This is ${extraTime} hours more than they work in a month (at 40 hours a week). They would need ${currency(extraMoney)} extra to afford rent every month.` : `Congratulations! A person on minimum wage in your state is one of the few that can pay rent. They have ${currency(extraMoney)} left for everything else.` ) 
  downPaymentHours.innerText = extraTime >= 0 ? "Sorry, minimum wage will never be able to afford a house while paying rent" : `It will take ${(downpayment / extraMoney / 12).toFixed(2) } years to save for a 20% house down payment while paying rent and saving all the extra money above while on minimum wage.`

  if(extraTime >= 0){
    removeMe.classList.add("hidden")
  }
  else{
    removeMe.classList.remove("hidden")
  }
}

// "Compare Your Wage" form submission
const newWagePost = document.querySelector('#newWagePost')
newWagePost.addEventListener('submit', submitClicked)

function submitClicked(){
  storageCheck()
  updatelocalStorage()
}

// "Compare Your Wage" after wage submission
const wageInfo = document.querySelector('.wageInfo')

function compareWage(wage, freq, state ){
  //removes hidden class from list
  wageInfo.classList.remove("hidden")

  let stateObject = statesObject.find(x => x.abbr == state)
  let stateName = stateObject.State

  let wageConversion = {
    Yearly: 2080,
    Monthly: 173.33,
    Weekly: 40,
    Hourly: 1
  }
  wageConversion.reduce = function(freq, conversion){
    return wage / (freq == "yearly" ? this.Yearly : freq == "monthly" ? this.Monthly : freq == "weekly" ? this.Weekly : this.Hourly) * conversion
  }

  let wageInHourly = wageConversion.reduce(freq, wageConversion.Hourly) 
  let wageInWeekly = wageConversion.reduce(freq, wageConversion.Weekly) 
  let wageInMonthly = wageConversion.reduce(freq, wageConversion.Monthly) 
  let wageInYearly = wageConversion.reduce(freq, wageConversion.Yearly) 
  let wageRatio =  wageInHourly / stateObject.minWage
  let downpayment = stateObject.avgHouseCost * .2
  let workedHours = Math.round(downpayment / wageInHourly)
  let houseYears = (workedHours / 2080).toFixed(2)
  let fasterTime = Math.abs(houseYears - ((Math.round(downpayment / stateObject.minWage)) / 2080)).toFixed(2)
  let rentTime = stateObject.avgRentZillow / wageInHourly
  let extraTime = (rentTime - 173.8).toFixed(2)
  let extraMoney = Math.abs(extraTime * wageInHourly)

  wageDetails.innerText = `Wage of ${currency(+wage)} per ${freq.slice(0, freq.length -2)} in ${stateName} `
  wageConvertedFreq.innerText = `Your wage is ${currency(wageInHourly)} per hour, or ${currency(wageInWeekly)} per week, or ${currency(wageInMonthly)} per month, or ${currency(wageInYearly)} per year.`
  minWageComparedSubmittedWage.innerText = `You make x${wageRatio.toFixed(2)} times the minimum wage of ${stateName}` 
  yourHouseHours.innerText = `It will take you ${workedHours} hours (or ${houseYears} years at 40 hours a week) to save a 20% down payment at your current wage.`
  fasterHours.innerText = `You will save for a house down payment ${fasterTime} years faster than a minimum wage earner.`
  yourRentHours.innerText = `It will take you ${rentTime.toFixed(2)} hours worked a month to pay (average) rent at your wage. ` + ( extraTime > 0 ? `This is ${extraTime} hours more than you work in a month (at 40 hours a week). You would need ${currency(extraMoney)} extra to afford (average) rent every month.` : `Congratulations! You can pay rent. You have ${currency(extraMoney)} left for everything else every month.` ) 
  yourDownPaymentHours.innerText = extraTime >= 0 ? "Sorry, you will never be able to afford a house while paying rent" : `It will take ${(downpayment / extraMoney / 12).toFixed(2) } years to save for a 20% house down payment while paying rent and saving all your extra money above.`
}

//Local Storage

//local storage update on submission
function updatelocalStorage(){
  localStorage.setItem("localWageAmount", document.querySelector('#inputAmount').value)
  localStorage.setItem("localWageFreq", document.querySelector('#selectedFreq').value)
  localStorage.setItem("localWageState", document.querySelector('#selectedState').value)
}

//local storage check if submitted before
function storageCheck(){
  if(localStorage.getItem('hasSubmitted')){
    console.log("already submitted, deleting previous")
    deleteDatabaseItem()
  }
  else{
    localStorage.setItem("hasSubmitted", "true")
  }
}

//local storage check at page opening and called
//on startup, if previously used, load "Compare Your Wage" and "The Facts" from localstorage values
function localStorageStartup(){
  if(localStorage.getItem('hasSubmitted')){
    compareWage(localStorage.getItem("localWageAmount"), localStorage.getItem("localWageFreq"), localStorage.getItem("localWageState"))
    getData(localStorage.getItem("localWageState"))
  }
}

localStorageStartup()

//this creates a one database object submission per user functionality 
//this is a cheeky way of "updating"
//this will send a delete method to server, so server can delete item from mongoDB
//delete request item will be equal to local storage values, which will be the last form submissions provided
//unique items in this case does not matter, so can disregard objectIds/unque database objects
//much easier ways to do this, but this allows interesting use of local storage and additional CRUD play
//new submission still gets posted to database as usual (1 out, 1 in)
function deleteDatabaseItem(){
  fetch('/wages', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: localStorage.getItem("localWageAmount"),
          frequency: localStorage.getItem("localWageFreq"),
          state: localStorage.getItem("localWageState")
        })
      })
        .then(res => {
          if (res.ok) return res.json()
        })
}


//helper functions

// convert numbers to a string currency
function currency(num){
  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

// reset state drop down box
const stateSelector = document.querySelector('#stateSelector')

function formReset(){
  stateSelector.selectedIndex = 0; 
}

//stop invalid key presses in number input field
let inputBox = document.getElementById("inputAmount");

let invalidChars = [
  "-",
  "+",
  "e",
];

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

// implemented click event for map, argument returned is the abbr of state clicked
// call function that updates "The Fact" box
// call formReset function that resets selected entry in "The Facts"
simplemaps_usmap.hooks.click_state = function(id){
  getData(id)
  formReset()
}

//button click disable to stop button smashing or double clicks
function disableButton(button){
    button.setAttribute("disabled", "disabled");

  // Removes disabling after 3 seconds
  window.setTimeout(function() {
    button.removeAttribute("disabled");
  }, 3e3);
};