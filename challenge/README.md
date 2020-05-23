# Bootcamp: UCB-VIRT-DATA-PT-03-2020-U-B-TTH

### Bootcamp Challenge #11 - 5/24/2020
Bootcamp Challenge 11: Module UFOs

### UFOs Home Page
- [UFOs Home Page Code](./index.html)

### Links Used
- [data.js](https://courses.bootcampspot.com/courses/140/files/37171/download?wrap=1)
- [pseudoCode.js](https://courses.bootcampspot.com/courses/140/files/37174/download?wrap=1)
- [starterCode.js](https://courses.bootcampspot.com/courses/140/files/37194/download?wrap=1)

### Challenge Description
**Objectives**
The goals of this challenge are for you to:
- Create, update, and deploy JavaScript functions to provide additional table filters.
- Update and deploy forEach (for loop) to loop through the filters and update them with user input.
- Update and populate the dynamic filters and table using JavaScript and HTML.
- Include the 5 filters from the webpage: Date, City, State, Country, Shape

## Methodology, Summary, Purpose, Technologies 
For the Week 11 Challenge, the purpose of the assignment was to get familiar with layout out HTML using bootstrap native libraries. To take advantage of advanced processing, we utilized https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js to be able to utilize the d3 library - a data drive document javascript library used to visualize data with HTML, SVG, and CSS. All of the HTML for the challenge was stored in index.html while all the JS files were stored in static/js/ directory. 

The static directory contains 3 subdirectories: css, images, and js. The css dir is where we define stylesheets for the components utilized in the index.html. For this challenge, we set the body background color and the jumbotron background image and style. The image used for the background of the jumbotron is saved in the static/images/ dir - for this challenge it was the only image used. In the js dir, we defined data.js and app.js files. data.js. Data.js defines an array defined as data with a list of entires: datetime, city, state, country, shape, durationMinutes, and comments. These are the sightings of the UFOs. App.js utilizes the data array defined in data.js from the javascript import at the bottom of the index.html file <script src="static/js/data.js"></script>. Since we define the import for app.js under the import for data.js, it allow app.js to simply utilize the data array as though it was defined in the same file and no extra imports required.

The index.html file in the head HTML tag defines the viewport to be responsive, defines the title for the page, a link to the bootstrap library, and a link to the style.css. In the body HTML, at the top we define a navbar that constains the title, followed by a div with a jumbrotron class which is defined in the css providing the image for display. We then define dives of class container-fluid to span the entire width of the viewport to provide a couple of titles. The next div with container-fluid class defines a form with 5 filter options listed within a ul with each separate li entries per filter; there is also a button to submit the filter at the bottom. The divs within the row class utilize bootstrap's col-md-3 and col-md-9 to utilize the grid functionality of bootstrap to help us properly layout the page. Finally we define a table with the thead and column names defined, but an empty tbody as that gets populated from javascript code.

App.js does the heavy lifting. There is a function buildTable that takes in a list of data, initially this is the data array defined in data.js. It first clears out the table defined in HTML, then loops through the data array and appends a new column using cell.html(val) to unescape the ascii characters found in the comments column of the data array. In the updateFilters function, this is called upon a change registered by the eventListener that we attach using d3 to all input HTML elements - if a value was defined then I set it in the filter dict with a lowerCase value to allow for case insensitive search. In the filterTable function, I utilized Object.entries to get a list of each key, value defined in the filters dictionary. Then utilize the filter function to filter only only those columns that match the value defined in the filters dict. Since we loop through all the entries of the dictionary, by the end we are left with only those row that match all criteria specified.

## Recommendations for Further Development
- In the filter search, instead of providing textboxes for all of the input values to filter on, it would be a better UX if these were dropdowns with a list of all values available in the table so that there is no chance of error when the User enters in the data.
- Currently there are 5 search criteria, we can add another search criteria to filter by duration.
- In the duration column, there are many different ways to specify minutes: mins., minutes, min, a few minutes etc. It would be best to standardize this data so they all followed the same convention e.g. 1 min, 2 mins, 10 mins etc.
