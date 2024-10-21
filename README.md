
# Personal website/future portfolio

This project is a website that I made as a part of my engineering studies. The website includes a home page with a small introduction, a video page and an animelist page. It's hosted with Cloudflare Pages. 

Link to website: https://animesivu.pages.dev/views/home

## WEB-SOVELLUSTEN PERUSTEET - Course Evaluation Criteria
I will now go through each of the evaluation criteria with explanations of my implementation and line numbers with example code snippets.
## HTML (25%)

### 1/5: Basic HTML structure is present.
Both of these HTML files have a basic HTML structure. (home.html, animelist.html)

### 2/5: HTML structure with clear content differentiation (headings, paragraphs, lists)
I use clear content differentiation all the way through my HTML files. (home.html, animelist.html)

### 3/5: Use of forms, links, and media.
#### Form 
home.html lines 57-60

#### Links
home.html lines 16-18 and 74-75.

#### Media
My website has many videos and pictures and one very important one in portfolio.html. (home.html line 63)

### 4/5: Tables are effectively used. 
In the animelist.html page I use a table to show array items. (lines 77-98)

### 5/5: Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.  
My website uses a clear main structure for the body in animelist.html, home.html HTML files: 
```
<body>
    <header>
        <nav><nav>
    <header>

    <main><main>
    
    <footer><footer>
<body>
``` 

In addition to a clear semantic structure there is an example of elements with descriptive classes that describe the content inside in animelist.html lines 27-75.

---

## CSS (25%)

### 1/5: Basic CSS styling (colors, fonts).  
I use lots of basic styling in home.css, animelist.css and portfolio.css. 

### 2/5: Use of classes and IDs to style specific elements.  
I use lots of classes for styling in home.css, animelist.css and portfolio.css. I use styling with an ID in home.css lines 105-109 affecting the element in home.html lines 30-34.

### 3/5: Implementation of responsive design elements.  
I use grids, flexboxes and media tags to get my page to scale in size for different devices like tablets and phones. (animelist.css lines 235-459 and 70-151)

### 4/5: Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
Flexbox and grid in animelist.css lines 70-151.

### 5/5: Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
My website uses many grids and flexboxes in parallel with media queries to make the website mobile friendly. You can try it with your phone. (It also has a hambuger style menu)

The website has a consistent color scheme that is nice to look at.

I use many hover stylings to indicate clickability of an element at lines: 

animelist.css lines 53-56 and 151-153

---

## JavaScript Basics (25%)

### 1/5: Simple interactions (like alerts on button click).  
I have an alert on a button click in home.js line 75. The button being in home.html line 59. It submits the message written in the message box and sends it to my teams :D

### 2/5: Multiple event listeners and basic DOM manipulations.  

#### Event Listeners
Event listener for the activation of the hamburger style menu.
portfolio.js lines 29-32

animelist.js lines 17-20

home.js lines 129-132, 134 and 136-139

#### Basic DOM manipulations
home.js lines 129-132 (DOM manipulation for toggling the hamburger menu on and off)

animelist.js lines 9-15 (DOM manipulation for inserting data into a table)

### 3/5: Use of arrays, objects, and functions.
In animelist.js I use an array to insert items into a table. (line 11)

Lots of objects and functions used in home.js

### 4/5: Advanced logic, looping through data, and dynamic DOM updates.  

#### Advanced Logic
Advanced logic like switch cases and for loops are used in portfolio.js and animelist.js

#### Looping through data
animelist.js lines 9-15

#### Dynamic DOM updates
You can see dynamic DOM updates in home.js lines 129-132 (DOM manipulation for toggling the hamburger menu on and off)

Also the event listeners I mentioned earlier do dynamic DOM updates.(portfolio.js lines 29-32,
animelist.js lines 17-20,
home.js lines 129-132, 134 and 136-139)

### 5/5: Consistent use of Object-Oriented JavaScript principles. 
I heavily utilize objects and use object-oriented javascript principles throughout the home.js file but here are some example lines:

line 64

lines 82-127

line 44-80

---

## Asynchronous Operations (25%)

### 1/5: Use of timers.
portfolio.js lines 3-27. I use a timer to have a countdown and load the page after the countdown reaches zero.

### 2/5: Successful implementation of an AJAX call or Fetch.  
Successfully implemented Fetch from AniList API in home.js:
lines 82-127.

### 3/5: Data from the asynchronous call is displayed on the webpage.
The same Fetch data from the AniList API is displayed on the website.

### 4/5: Error handling is implemented (for failed API calls, etc.). 
I have error handling for the same Fetch for the AniList API at lines 106-127.

### 5/5: Effective use of asynchronous data to enhance user experience (like filtering, sorting)

Used promise handling for fetching data from a weather API lines 23-42 home.js

Use a lot of general asynchronous data in home.js for dynamically updating data in html elements.

## API Reference

#### Weather API
I used a free weather API to get the temperature in Oulu.

API website: https://open-meteo.com

#### AniList API
I just use it to fetch a picture of a character to display on the site when a button is clicked.

API Docs: https://docs.anilist.co/

## Authors

- [@Martel02](https://github.com/Martel02)