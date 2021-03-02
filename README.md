# Plantrush project

## Description

User can upload images of their houseplants, get information about their plant, make posts to ask for help/advice and comment on posts of other users.

## User Stories

- 404 - error page when user tries to access a page that doesn’t exist so that they know it was their fault as a user
- 500 - error page when backend dev screwed it up so that user know that is not their fault
- login-signup - Welcome page that gives user the option to either log in as an existing user, or sign up with a new account
- home - after logging in, show nav bar with user menu and search option 
- navbar - navbar can be accessed only after login, then it can be used to navigate to different parts of the page or logging out
- profile - User will be able to edit their information, see their plants and posts
- plants - user will get a summary of the plants they entered in the system
- posts - user will get a summary of the posts they have made

## Backlog

- something will be here very soon

## Routes

* GET /
  * renders the index page with login/signup forms

* GET /auth/signup
  * redirects to / if user is logged in
  * else renders signup form

* POST /auth/signup
  * redirects to / if user is logged in
  * body:
    * email
    * password
    * password confirmation

* GET /auth/login
  * redirects to / if user logged in
  * render login form 

* POST /auth/login
  * redirects to / if user is logged in
  * body:
    * email
    * password

* GET /posts 
  * renders a list of all posts by user

* GET /plants 
  * renders a list of all plants added

* GET /posts/:id
  * show individual post by id

* GET /plants/:id
  * show individual plant by id

* POST /posts/create
  * redirects to / if user not logged in
  * otherwise redirects to /posts
  * body:
    * title
    * content
    * author
    * created

* POST /plants/create
  * redirects to / if user not logged in
  * otherwise redirects to /plants
  * body:
    * name
    * description
    * watering
    * light

* POST /posts/:id/comment
  * redirects to / if user not logged in
  * otherwise redirects to /posts
  * body:
    * content
    * author


* GET /logout
  * ends session

## Models

* User

* Plant

* Post

* Comment


## Links

#### Git


Stuff goes here


[Repository](url)

#### Slides