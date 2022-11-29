# Testing project for "Tubics"

React/TypeScript + Hooks + Firebase project that handles the problem of number splitting on smaller parts without duplicates and zero values.<br />

[StyledComponents](https://styled-components.com/) and SASS was used for styling.<br />
ContextAPI was implemented for state management.<br />
We used [React-Hook-Form](https://react-hook-form.com/) for validation of input field.<br />
Formatting configuration defined with ESLint and Prettier.<br />
Working on JEST and React Testing library skills through this project. <br />

Project is deployed to [Github Pages](https://pages.github.com/), and demo can be seen [here](https://stefanikolic018.github.io/CarsArmy/).

## Back-end

Because this was a relativly simple problem, we used [Google Firebase](https://firebase.google.com/) as a back-end service and we used its Cloud Firestore for the database.<br />
<b style="color:red">\* Tried to put Firebase configuration into GitHub secrets, but the keys are going to be visible in the network tab. I was thinking about ENV file, but then GitHub would give me warnings, and because of all that configuration is called from it's own file because there is no way to secure those keys without a real back-end!</b>
<b><u>Firebase Credentials:</u></b><br/>

- Email: chadbutlerc@gmail.com
- Password: Lilili11! <br />

Database is called <u>cars-army</u> and looks like this:
<img src="/public/screenshots/db.png" alt="DB" title="DB" style="text-align: center">
<b>Currently it's allowed to acces and modify data in there by anyone because rules are set for testing purposes only!</b><br />

<img src="/public/screenshots/rules.png" alt="Rules" title="Rules" style="text-align: center"><br/>

## How it works

Logic behind the application and manipulation of the input number is done through <i>GlobalContext</i> with use of the data from the <i>FirebaseContext</i> by calling util function <i>calculateParts</i> that is creating random numbers with the help of <i>randomNum</i> function and checking with array of previous results to return non-duplicate/non-zero results.

## Idea and Usage

Idea is that when the user enters desired number(must be higher then the number of Cars we have in the DB) application splits it to different smaller parts based on the number of cars that we have.
<img src="/public/screenshots/cars.png" alt="On load" title="On load" style="text-align: center">
<b style="color:red">\* Images are from the Google and only for personal use!</b>

There is error handling for the following cases:

- If user enters invalid number(smaller than number of cars), application will show error message
  <img src="/public/screenshots/invalid-number.png" alt="Invalid number" title="Invalid number" style="text-align: center">
- If user enters empty string
  <img src="/public/screenshots/required-number.png" alt="Required number" title="Required number" style="text-align: center">

## Available Scripts
- Version of Node: 16.13.1<br />
- Version of NPM: 8.5.5<br />
In the project directory, you first need to run:

### `npm install`

And when packages gets installed, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
