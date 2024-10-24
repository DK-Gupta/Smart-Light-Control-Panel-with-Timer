# Smart-Light-Control-Panel-with-Timer

This Smart Light Control Panel is a web-based application designed to provide users with the ability to control multiple lights (or relays) and set a customizable timer for each light. The application is built using HTML, CSS, and JavaScript, and integrates with Firebase Realtime Database to manage and synchronize light statuses in real-time across devices. Whether you are on a desktop, tablet, or mobile device, the interface is fully responsive and user-friendly.

## Key Features:

###### Real-time Control: Users can toggle the status of each light (on/off), and the state is synced with Firebase in real-time, ensuring updates are instant across all connected devices.
Custom Timer for Each Light: The user can set a timer in hours, minutes, and seconds for each light. Once the timer expires, the light automatically turns off, making it ideal for situations where automated control is needed (e.g., forgetting to turn off the lights).
###### Visual Feedback: Each light has a dynamic status indicator with an icon that changes based on the light’s state (on/off).
Responsive Design: The interface adjusts to fit any screen size, whether on desktop, tablet, or mobile devices, ensuring a seamless user experience.
###### Modern UI with Timers: The app includes well-designed input fields for setting timers, with clean styling and user-friendly controls.

## Technologies Used:

###### Frontend: HTML, CSS (Flexbox, responsive design), JavaScript (ES6+)

###### Backend: Firebase Realtime Database for syncing light statuses and handling real-time data updates.

###### Icons: FontAwesome for the interactive lightbulb icons that reflect the on/off status visually.

###### Version Control: GitHub for collaboration and version management.

## How It Works:

#### Firebase Integration:

The status of each light (on/off) is stored in Firebase and updated in real-time. When a user toggles a light, the state is immediately reflected in Firebase and on all connected devices.

#### Customizable Timer:

For each light, users can input the desired time in hours, minutes, and seconds. Once the light is turned on, it will automatically turn off after the specified time has passed.

#### Responsive UI:

The application uses responsive design techniques to ensure the layout adapts to all screen sizes. Whether you’re on a phone, tablet, or desktop, the app looks clean and remains fully functional.

## Setup Instructions:

#### Clone the repository:

<img width="737" alt="Screenshot 2024-10-21 at 6 33 30 PM" src="https://github.com/user-attachments/assets/76456586-eec6-44cb-826f-0a87e4383b8c">

####Open the project:

Navigate to the project directory and open the index.html file in a browser.

#### Configure Firebase:

Set up a Firebase project and update your Firebase configuration in lightControl.js.

#### Run Locally:

Use a local server like Live Server in Visual Studio Code or any other static file server to view the project locally.

## Screenshots:



## Future Enhancements:

#### Voice Control: Integrate with voice assistants like Google Home or Alexa for hands-free control.

#### User Authentication: Add Firebase authentication to allow secure access for multiple users.

## Contact:

For any issues or inquiries regarding this project, contact us at:

#### GitHub: DK-Gupta
#### Email: dkg700731@gmail.com


