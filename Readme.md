<h1 align="center" style="font-size:50px">
  ChatSphere
</h1>
  <p align="center" style="font-size:18px"> Chat app that allows you to join chat rooms and chat with other members through real-time communication..</p>
<p align="center">
  <a href="#tech-Stack">Tech Stack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#features">Features</a> •
  <a href="#process">Process</a> •
  <a href="#learnings">Learnings</a> •
  <a href="#improvement">Improvement</a>•
  <a href="#license">License</a>
</p>
<br/>

![screenshot](/chatshpere_preview.gif)

# Tech Stack:

## 💻Frontend

[![My Skills](https://skillicons.dev/icons?i=ts,tailwind,react,vite)](https://skillicons.dev)<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" width="45px" style="background-color:#fff;border-radius:3px;padding:2px;margin-left:5px;" title="Socketio"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" width="45px" style="background-color:#fff;border-radius:3px;padding:2px;margin-left:5px;" title="React Router">

## 🖥backend

[![My Skills](https://skillicons.dev/icons?i=ts,nodejs,express,mongodb)](https://skillicons.dev)<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" width="45px" style="background-color:#fff;border-radius:3px;padding:2px;margin-left:5px;" title="Socketio"><img src="https://icon.icepanel.io/Technology/svg/Mongoose.js.svg" width="45px" style="background-color:#fff;border-radius:3px;padding:2px;margin-left:5px;" title="Mongoose">
<br/><br/>

# How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/MedtheVorg/ChatSphere--websocket-chat-app-.git

# Go into the server and the client folder
$ cd server  and cd client

# Install dependencies for both client and server folders
$ npm install

# Run the server (while inside the server folder)
$ npm start

# Run the client (while inside the client folder)
$ npm run dev
```

<br/>

# Features:

-   Real-Time Messaging : Send and receive messages to and from members of the chat room.
-   Multiple Chat Rooms: Choose from 5 chat rooms and start chatting instantly.
-   Message Broadcasting : Get notified whenever a member joins or leaves the chat room.
-   Message History : The chat room will store sent messages to a mongodb database and display the messages history whenever you join a room.

<br/>

# Process:

before starting this project I had no prior knowledge of websockets and how they work, I started by doing my research and understanding how they work and what is their primary purpose which is to enable a real-time communication through a full-duplex communication channel over a single long-lived connection.after that and using the socketio library I implemented what I learned to create a minimalistic chat app where a user can provide their name choose a chat room and start chatting.
<br/>

# Learnings:

during this project I learned about http polling and http streaming (half-duplex communication ) and how they can be used to mimic real-time communication. but they have certain drawbacks such as high latency and that is where websockets come to shine and provide full-duplex communication.
<br/>

# Improvement:

this project can be improved on by adding:

-   User Authentication and Authorization
-   Rich Media Support : allow users to send other multimedia content such as images, videos, audio and more.
-   Message Editing and Deletion: Enable users to edit or delete their messages, providing more control over the content they share.
-   Message Reactions : allow users to react to messages using emojis.
-   Status Indicators : Display users activity (online, away, offline)
    <br/>

## License

MIT
https://raw.githubusercontent.com
