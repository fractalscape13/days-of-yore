# Days of Yore : Flashcard app
#### Joseph Wangemann, Benjamin Thom, Brandan Sayarath, Jeremy Kale Padot, Patrick Delaney
May 4-6, 2020

### This app allows a user to add memory cards that have a front and back.  On click, they will toggle displaying either the front content or back content.  Uses Firebase/Firestore database

## Wireframe
![wireframe](public/days-of-yore-wireframe.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup Instructions
* git clone https://github.com/fractalscape13/days-of-yore
* Run 'npm install' to install all dependencies
* This project requires a Firebase database.  Create a project in Firebase console.  From Firebase you will receive an API key and some other information.  You will need to create a .env file in the root directory of the project that has the following information in it from Firebase console:

* REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
* REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
* REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
* REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
* REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
* REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
* REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"


## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## Technologies Used

* Git
* React
* Firebase/Firestore
* Redux & React/Redux

## License

Licensed under the MIT license.

&copy; 2020 - Benjamin Thom, Joseph Wangemann, Jeremy Kale Padot, Patrick Delaney