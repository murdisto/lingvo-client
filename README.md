[![Netlify Status](https://api.netlify.com/api/v1/badges/d1bc0265-e16f-4ebb-8ac6-e831a59fe0aa/deploy-status)](https://app.netlify.com/sites/lingvo/deploys)
# [Lingvo](https://lingvo.netlify.com/)
[Server Repo](https://github.com/murdisto/lingvo-server)
 

## Description
  Lingvo is a simple web app that helps you learn Esperanto. Lingvo implements
  a linked list algorithm to utilize the spaced repetition method of memorization.
  Users are presented with a word in Esperanto and asked to enter the equivalent
  word in English. Based on a getting the word correct or incorrect, the user will
  see that word less or more often in the future, respectively.

  A user's progress is also stored when they log out. Upon their return, the user
  be presented with the last word they were given in their previous session.

## Screenshots
<img src="screenShots/lingvodesk.png" alt="sign in" width="800px" />
<br />
<img src="screenShots/lingvomob.png" alt="" width="400px" />

## Tech Stack:
  Lingvo is a full-stack app built with the MERN stack.
  
## API
```        

├── /auth
│   └── POST
│       ├── /login
│       ├── /refresh
│ 
├── /users
│   └── POST /
│   └── GET
│       ├── /
│       ├── /next
│   └── PUT /submit
├── /questions
│   └── GET
│       ├── /
│       ├── /all
│   └── POST /

``` 

## Code Base:
All front end code can be found in this repo, and all the backend code can be found [here](https://github.com/murdisto/lingvo-server).
