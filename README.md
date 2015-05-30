# Never-Ending-Grocery-List-App

A simple web app for keeping track of items needed from the grocery store. The initial version of this web app was done as a front-end web development  assignment for Thinkful.com. 

## The Name & Concept

The concept behind the app is that in real life you often need different items from different places (e.g., big box discount stores, grocery stores, specialty food stores, etc.), so by the time you cross some items off your list at one store, new items are often already being added. Since such lists seem continuous, the app was titled the "Never-Ending Grocery List". The design of the app is, therefore, focused on a simple interface that allows users to add and remove items but assumes that users rarely, if ever, remove all the items on the list at once.

## Basic Features 

With the above simple concept in mind, the app includes:

1. an input box for needed items to be added.
  - when duplicate items are entered items stack (increase quantity on existing item).
2. a "need" list for items yet to be purchased. 
  - total items displayed at top of grouping.
  - when an item is purchased it can be checked (moving it to the "got" list).
  - when an error is made or an item is otherwise not needed it can be removed with delete button.
3. a "got" list for items already purchased.
  - total items displayed at top of grouping.
  - when user wants to move an item back to "need" list, it can be unchecked. 
  - when history of "got" items is no longer wanted, the clear list button can be used.
  - when a user wants to remove select items from the "got" list, the delete button can be used.


--------

# Never-Ending-Grocery-List-App

The original version of this project was completed for [Thinkful's Frontend Developer Program](https://www.thinkful.com/courses/learn-web-development-online/). The project demonstrates the use of HTML, CSS, JavaScript, and jQuery to build a simple web-based grocery list app. In completing the assignment, I attempted to adhere to a simple uncluttered design that allowed users to easily see what items still remained on their list. The app was also designed to combine duplicate items on the same line and reflect item quantity. The complete code is provided below for anyone who may find it useful.  

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

The functions used to run the trivia quiz are located in [js/app.js](https://github.com/edwardbryant/Time-Travel-Trivia-Quiz/blob/master/js/app.js) and are explained in more fully below. 

##### replaceHeading()

This function is purely cosmetic and is used to reduce the size of the existing pages's header to allow more space for displaying question/answer content.

##### cycleTestimonials(index, prev)

This function is another cosmetic extra which is used to cycle the joke 'testimonials' that appear on the start page. 

##### newGame()

This function resets game environment vars (e.g., the user's score, question history, etc.).  

##### findQuestion()

This function determines a new previously unasked question to present to the user. It calls pickQuestion (see below) to randomly get a possible question and calls wasAsked (see below) to determine if it was already asked. If a question was already asked the function rpeatedly calls pickQuestion until it finds one that has not been used.  

##### pickQuestion()

This question randomly selects a question from the JSON object quiz_questions and assigns that question's number to the num var.

##### wasAsked()

This function looks at the num var (the number of a possible question to ask) and checks prior_questions (i.e., the list of previously asked questions) to determine if the question was already asked. The function returns a boolean true/false value.

##### loadQuestion()

This function takes the question number in num var and presents the content in the quiz_questions object to the user.

##### correct(user_answer)

This function takes the user_answer (a int representing the option the user selected) and returns true or false if it matches the correct answer to the current question. 

##### updateScore()

This function refreshes the current score to ensure the current score is displayed to the user.

##### updateRank()

This function uses jQuery to display the final rank achieved by the user (and a related message) based on a possible score of 1 to 10. The current five ranks used by the web app assume a total of ten questions and a possible score of 0 to 10. If the scoring is altered or the number of questions is modified, the ranks and score ranges also need to be changed.  

## Copyright and License

- Project code contributed by [Edward Bryant](http://www.edwardbryant.com) is offered under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).




