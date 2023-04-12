
# Description
### React app for travellers and  enthusiast.
- Here you can find great blog articles.
- You can comment and ask questions about destinations.
- If wish you can contribute with you stories
- On our site you can create helpful and beautiful articles for the other participants.
- Mostly get ideas for the next adventure or romantic journeys.

# To start the app 
In the project directory
### npm start
In server directory
### node server.js

# Authentication

## Register
Create a new user by fill all the fields
1. Username must be at least 3 characters
2. Age should be positive number
3. Add avatar image by paste url, the url path should begin with http:// or https://
4. To be considered a valid email address should have follow requirements
    - prefix
    - @
    - domain
    - dot after domain and at least 2 characters after
5. Password
    - Password should be between 6 to 20 characters
    - contains at least one numeric digit
    - one uppercase, and one lowercase letter
## Login
1. Email address
2. Password
## Logout
After logout authorization token will be deleted and session will be eliminated, the user is redirected to home page.

# Blog posts
### You can see all blog posts by navigate to blog page
    - Read articles
### If you are authenticated user
    - write articles
    - or leave comment if you wish

# Leave us a review
### Navigate to other about us
    - use stars rating system and leave a review

# Preview App

![Screenshot](/resources/img/preview.png)

# Under the hood
### The mighty requester
![Screenshot](/resources/img/requester.png)
### Create article by using requester above
![Screenshot](/resources/img/addNewPost.png)

# Server
App Server-side is heavily based on: softuni practice server.
[Copyright here](https://github.com/softuni-practice-server/softuni-practice-server#softuni-practice-server)

