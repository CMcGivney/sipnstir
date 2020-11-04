
import ReactGA from 'react-ga';
import auth from './auth.ts'; // Sample authentication provider

const measurementId = "G-TTD6VHM4G0"; // Replace with your Google Analytics measurement ID
ReactGA.initialize(measurementId);
ReactGA.set({
  userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
},
ReactGA.event({
category: "Get Quote",//event to track users clicks on get quote
action: "User pressed the get quote button"
})
)