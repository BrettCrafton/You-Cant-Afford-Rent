# You Can't Afford Rent

An interactive map / Factoid / CRUD database that displays housing / rent / wage information for all 50 states in the United States (2022).

Live Project at: <a href="https://youcantaffordrent.com" target="_blank" rel="noreferrer"> https://youcantaffordrent.com </a>

<a href="https://youcantaffordrent.com" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Harry%20Potter%20gif.gif?raw=true" alt="project example"/> </a>

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js (w/ Express), MongoDB

Utilized the API I created from scratch, specifically for this project, hosted at https://bc-states-api.herokuapp.com/.
Update - due to Heroku discontinuing their free tier, the json data obtained from the API is built into the app. This was an easy conversion seeing how I build the API.

"The Facts"
Built map with https://simplemaps.com/. Some basic data I built into the map and presents on hover. Clicking on map, initiates data inserted into the "The Facts" list. This function is also able to be initiated from the selector input under "The Facts" section. 

"Compare Your Wage"
Input functions in this section on submission do 2 things. 1. Send the data via post method to MongoDB database for storage and usage within the "How You Stack Up" section. 2. Store the data in local storage for callback on revisit of the site.
Data is then used to compare against minimum wage and other relevent info of the submitted state.

Inputs in this section keep a 1 input per user rule via local storage checks. If data is already stored in local storage on additional submissions, then database data gets deleted, and new info posted to database. Also on load of page, if local storage contains previous submissions, then data will autoload from local storage info.

"How You Stack Up"
In this section, all user submitted data from the MongoDB database is used. Info is loaded on wage submission under "Compare Your Wage". Using get methods from MongoDB, all data is used in the National facts section and only the submitted state data is used in the state section.

## Optimizations:

Make code DRY by reducing redundancies, especially in the conditional section (did at first but function wasn't working properly so moved on). OOP would help here. Change simple conditional if/else statements to ternary operators. With time, make more responsive. Especially on the smaller viewports where some odd orientations may occur. Modify image data from API for more style consistency with carousel. 

## Lessons Learned:
CSS grid, local storage, API creation, CRUD, MongoDB integration, Express, relearned apending child elements to lists (even though this went unused).
Honed more in fetch requests. Organized my js code into a more legible format with better comments. Some new style and transparency options in CSS.

## APP Use:

Select by School House, Staff, or All.

If included in the API, will show character's:

<ul>
  <li>Name</li>
  <li>Nickname(s)</li>
  <li>Actor(s)</li>
  <br>
  <li>Species</li>
  <li>Gender</li>
  <li>Eye Color</li>
  <li>Hair Color</li>
  <li>Status (alive or dead)</li>
  <li>DOB</li>
  <li>Year of Birth</li>
  <br>
  <li>Wand material, core, and length</li>
  <li>Patronus Form</li>
</ul>

## Other Projects:

**Cocktail Recipes:** https://github.com/BrettCrafton/Cocktail-Recipes

**Rick and Morty Parasite Detector:** https://github.com/BrettCrafton/Rick-and-Morty-Parasite-Detector

**NASA APOD:** https://github.com/BrettCrafton/NASA-APOD
