# Social-Network-API
Week-18 Challenge (MongoDB)

## Table of Contents
- [Description](#description)
- [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Features](#features)
- [Usage-Information](#usage-information)

## Description

This application serves as the foundation for a full stack social network application utilizing MongoDB as the database, Express.js for routing, and the Mongoose ODM. It establishes the initial CRUD API routes, enabling user creation, search, update, and deletion. Users can also share thoughts, react to their friends' thoughts, create friend lists, and subsequently delete thoughts, reactions, friends, and their own user profile. While the application is still in its early stages, the integration of the MongoDB database and API middleware routing represents a pivotal initial step in exploring the capabilities of MongoDB and the Mongoose ODM.

## Live Screen Recording of Application Functionality

https://watch.screencastify.com/v/oTgcMowwqQKc3qcbdiWX

## Installation

1. Clone the repo: `git clone git@github.com:Jhona11/Social-Network-API.git`

2. Open in VS Code. If you do not have VS code you must install it.

3. Using the terminal, install node.js.

4. Once node.js is installed, in the terminal, utilize the command `npm init -y` to initialize and create a package.json where project files will be stored.

5. Next, use the terminal to run the command `npm i` to install the dependencies associated with this application (developers may need to install dependencies directly from the command line).

   Commands to install each dependency:
   - `npm i express@4.18.2`
   - `npm i mongoose`
   - `npm i nodemon`
   - `npm i jest`

6. Next, you will want to make sure you have access to a MongoDB account and MongoDB Compass, these will allow you to interact with the database and visually confirm what changes are being made in the database. (Link for MongoDB & MongoDB Compass download -> https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb).

7. Once all dependencies are installed, you will then be able to run the command npm start from the root directory to spin up the server. With nodemon installed, you will also be able to utilize the command npm run dev to keep the server spun up between code edits.

8. From there, you can utilize applications such as Insomnia or Postman to test the functionality of the API routes within the program and make edits to the code base (Link to install Insomnia -> https://docs.insomnia.rest/insomnia/install). (Link to install Postman -> https://www.postman.com/downloads/). 

## Features

Features of this application include the ability to create users/thoughts, find all users/thoughts, find a single user/single thought, update user/thought information, and delete a user/thought. The ability to add reactions to particular thoughts, and friends to users is also a notable feature -> when a thought, reaction, or friend is added to the database, it will update within the user object accordingly.

## Usage Information

As of now the usage of this application can be conducted through spinning up the server with npm run start or nodemon with npm run dev, then heading over to an application like Insomnia or Postman and testing different API end points. For further information on starting up the server, MongoDB Compass and MongoDB installation navigate to the Installation section above.