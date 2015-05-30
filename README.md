# Never-Ending-Grocery-List-App

The original version of this project was completed for [Thinkful's Frontend Developer Program](https://www.thinkful.com/courses/learn-web-development-online/). The project demonstrates the use of HTML, CSS, JavaScript, and jQuery to build a simple web-based grocery list app. In completing the assignment, I attempted to adhere to a simple uncluttered design that allowed users to easily see what items still remained on their list. The app was also designed to combine duplicate items on the same line and reflect item quantity. 

The concept behind the app is that in real life you often need different items from different places (e.g., big box discount stores, grocery stores, specialty food stores, etc.), so by the time you cross some items off your list at one store, new items are often already being added. Since such lists seem continuous, the app was titled the "Never-Ending Grocery List".

## Table of contents

- [Demo](#demo)
- [Download](#download)
- [Documentation](#documentation)
- [Copyright and license](#copyright-and-license)

## Demo

For a demo, check out <http://edwardbryant.github.io/Never-Ending-Grocery-List-App/>!

## Download

The files for the project, may be [downloaded here](https://github.com/edwardbryant/never-ending-grocery-list-app/archive/master.zip).

### What's included

Within the download you'll find the following directories and files:

```
time-travel-trivia-quiz-master.zip/
├── css/
│   └── main.css
│   └── main.css.map
│   └── main.scss
│   └── normalize.min.css
├── img/
│   └── bag.png
├── lib/
│   └── font-awesome-4.2.0./
├── app.js
├── index.html
└── README.md
```

## Documentation

The functions used to run the trivia quiz are located in [js/app.js](https://github.com/edwardbryant/Never-Ending-Grocery-List-App/blob/master/js/app.js) and are explained in more fully below. 

##### updateGroups()

This function refreshes some display elements to the user. It checks the 'need' and 'got' groupings and looks for any items. Based on what it finds, it will update the total number of items displayed at the top of each group. It will also trigger the display of a message to the user if the list is empty (i.e., the item count is 0). This function is called within various other functions to update these items whenever the list counts may have changed.  

##### duplicateExists(name, group)

The duplicateExists function takes two arguments 'name' and 'group' to check if a particular item grouping contains a duplicate entry with the provided string 'name'. As the web app is currently designed, the 'group' argument must be either the string "need" or "got". The function will return a boolean true/false value only if there is an exact match. Matching is not case-sensitive.   

##### combineItems(name, qty, group)

coming soon

##### addNewItem(name)

coming soon

##### removeItem(x)

coming soon

##### checkItem(x)

coming soon

##### uncheckItem(x)

coming soon

## Copyright and License

- Project code contributed by [Edward Bryant](http://www.edwardbryant.com) is offered under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).




