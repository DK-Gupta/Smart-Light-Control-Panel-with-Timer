// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfTit1A-fBEIZQy6oIGOifKdLsBL0PiA",
  authDomain: "light-937cc.firebaseapp.com",
  projectId: "light-937cc",
  storageBucket: "light-937cc.appspot.com",
  messagingSenderId: "14984117427",
  appId: "1:14984117427:web:ac06cec432d15500a244c6",
  measurementId: "G-99QLG0G00K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to update relay status in Firebase
function updateRelayStatus(relayId, isChecked) {
  const relayRef = ref(database, 'relayStates/' + relayId);
  set(relayRef, isChecked);
}

// Function to convert hours, minutes, seconds to milliseconds
function convertToMilliseconds(hours, minutes, seconds) {
  return ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;
}

// Function to turn off the light after the specified time
function setLightTimer(relayId, hoursId, minutesId, secondsId) {
  const hours = parseInt(document.getElementById(hoursId).value) || 0;
  const minutes = parseInt(document.getElementById(minutesId).value) || 0;
  const seconds = parseInt(document.getElementById(secondsId).value) || 0;
  const timerDuration = convertToMilliseconds(hours, minutes, seconds);

  if (timerDuration > 0) {
    setTimeout(() => {
      updateRelayStatus(relayId, false);  // Turn off the light
      document.getElementById(relayId).checked = false;  // Update the UI toggle switch
      document.getElementById(`status-${relayId}`).innerText = 'Status: Off';  // Update status text
      const iconElement = document.getElementById(`${relayId}-icon`).querySelector('i');
      iconElement.classList.remove('on');
      iconElement.classList.add('off');  // Change icon to off state
    }, timerDuration);
  }
}

// Add event listeners for each relay with timer functionality
document.getElementById('relay1').addEventListener('change', function () {
  const isChecked = this.checked;
  updateRelayStatus('relay1', isChecked);
  if (isChecked) {
    setLightTimer('relay1', 'hours1', 'minutes1', 'seconds1');
  }
});

document.getElementById('relay2').addEventListener('change', function () {
  const isChecked = this.checked;
  updateRelayStatus('relay2', isChecked);
  if (isChecked) {
    setLightTimer('relay2', 'hours2', 'minutes2', 'seconds2');
  }
});

document.getElementById('relay3').addEventListener('change', function () {
  const isChecked = this.checked;
  updateRelayStatus('relay3', isChecked);
  if (isChecked) {
    setLightTimer('relay3', 'hours3', 'minutes3', 'seconds3');
  }
});

document.getElementById('relay4').addEventListener('change', function () {
  const isChecked = this.checked;
  updateRelayStatus('relay4', isChecked);
  if (isChecked) {
    setLightTimer('relay4', 'hours4', 'minutes4', 'seconds4');
  }
});

// Sync function to update the status, icon, and switch in real-time
function syncLightStatus(relayId, elementId, statusId, iconId) {
  const relayRef = ref(database, 'relayStates/' + relayId);
  onValue(relayRef, (snapshot) => {
    const isOn = snapshot.val();
    document.getElementById(elementId).checked = isOn;  // Update toggle switch
    document.getElementById(statusId).innerText = isOn ? 'Status: On' : 'Status: Off';  // Update status text
    const iconElement = document.getElementById(iconId).querySelector('i');
    iconElement.classList.toggle('on', isOn);  // Add 'on' class if light is on
    iconElement.classList.toggle('off', !isOn);  // Add 'off' class if light is off
  });
}

// Sync the status, icon, and toggle for each relay
syncLightStatus('relay1', 'relay1', 'status-light1', 'light1-icon');
syncLightStatus('relay2', 'relay2', 'status-light2', 'light2-icon');
syncLightStatus('relay3', 'relay3', 'status-light3', 'light3-icon');
syncLightStatus('relay4', 'relay4', 'status-light4', 'light4-icon');
