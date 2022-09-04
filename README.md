# You Can't Afford Rent

An interactive map / Factoid / CRUD database that displays housing / rent / wage information for all 50 states in the United States (2022).

Live Project at: <a href="http://youcantaffordrent.com" target="_blank" rel="noreferrer"> http://youcantaffordrent.com </a>

<a href="https://youcantaffordrent.com" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/you%20cant%20afford%20rent%20gif.gif?raw=true" alt="project example"/> </a>

## How It's Made:

**Tech used:** EJS, CSS, JavaScript, Node.js (w/ Express), MongoDB

~~Utilized the API I created from scratch, specifically for this project, hosted at https://bc-states-api.herokuapp.com/.~~  
**Update** - due to Heroku discontinuing their free tier, the json data obtained from the API is now built into the app. This was an easy conversion seeing how I built the API.

**"The Facts"**  
Built map with https://simplemaps.com/. Some basic data I built into the map and presents on hover. Clicking on map, initiates data inserted into the "The Facts" list. This function is also able to be initiated from the selector input under "The Facts" section. 

**"Compare Your Wage"**  
Form input in this section on submission do 2 things. 1. Send the data via post method to MongoDB database for storage and usage within the "How You Stack Up" section. 2. Store the data in local storage for callback on revisit of the site and use within this section.
Data is then used to compare against minimum wage and other relevent info of the submitted state.

Inputs in this section keep a 1 input per user rule via local storage checks. If data is already stored in local storage on additional submissions, then database data gets deleted, and new info posted to database. Also on load of page, if local storage contains previous submissions, then data will autoload from local storage info.

**"How You Stack Up"**  
In this section, all user submitted data from the MongoDB database is used. Using get methods from MongoDB, all data is used in the National facts section and only the submitted state data is used in the state section.

## Optimizations / Add-Ons:

The way it currently is, people can submit multiple times on different devices, or by clearing local storage on their device. Utilizing some type of authentication to stop this behavior would be useful. 

Refactor code to how I originally wanted and move all the algorithems / formulas I used to their own object. This would allow a "Dryer" code, make reuse of formulas easier, and make code easier to read. 

Additional section that includes top salary ranking in states. Additional input field for job type (finance, IT, Government etc.).

Clever performance optimization (not desired for my current use, but still cool when I thought about it at scale) would be instead of adding new mongoDB database documents everytime someone submits, have premade database documents for all 50 states + 1 national object. Each state document would have the current running average, as well as the number of submissions for that state to display. This is basic math at this point for calculating new averages to display and would scale phenomenally. Current implementation to find average requires filtering all corresponding state documents, then loading array of wages submitted, summing, and dividing by length. National database document would be similar just for all submissions. With a large database this may get slow. 

Add additional facts/formulas/algorithms in the "How You Stack Up" section.

## Lessons Learned:

EJS does not accept nested ternary operators.
EJS compiles into an intermediary string representation with a lot more cruft including added semicolons. This means you can only start EJS tags where JavaScript would accept a semicolon prefix, and unfortunately, ternary operators break with the way EJS adds the semicolons.

Used CSS grid for the first time, have predominantly used CSS flexbox or floats up to this point. I really liked how easy it is to setup and then make new sections that don't break the existing content flow. It is fairly naturally responsive as well. 

Basic local storage usage in new clever ways, as well as refined API creation technique (:thumbsdown: heroku free teir). 

That I should stop forgetting to restart my node server after making backend changes.

Stopping users from trying (or accidentally) to break your app is conceptually easy, but implementation is difficult to weed out edge cases

## APP Use:

This is pretty straight forward on the site design. Hover on map to get basic info. Click state on map or use state selector in "The Facts" section to get facts about that state.

Submit your wage in the "Compare Your Wage" section to get comparisons of your wage to state minimum wage as well as load the "How You Stack Up" section with relevent facts.

## Other Projects:

**Magical World of Harry Potter:** https://github.com/BrettCrafton/Magical-World-of-Harry-Potter
<a href="https://brettcrafton.com/Portfolio/Harry%20Potter/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Harry%20Potter%20gif.gif?raw=true" alt="project example"/> </a>


**Cocktail Recipes:** https://github.com/BrettCrafton/Cocktail-Recipes
<a href="https://brettcrafton.com/Portfolio/Bar%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Cocktail%20Recipe%20gif.gif?raw=true" alt="project example"/> </a>


**Rick and Morty Parasite Detector:** https://github.com/BrettCrafton/Rick-and-Morty-Parasite-Detector
<a href="https://brettcrafton.com/Portfolio/Rick-and-Morty/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/Rick%20and%20Morty%20gif.gif?raw=true" alt="project example"/> </a>


**NASA APOD:** https://github.com/BrettCrafton/NASA-APOD
<a href="https://brettcrafton.com/Portfolio/NASA%20API/index.html" target="_blank" rel="noreferrer"> <img src="https://github.com/BrettCrafton/BrettCrafton/blob/main/assets/NASA%20APOD%20gif.gif?raw=true" alt="project example"/> </a>
