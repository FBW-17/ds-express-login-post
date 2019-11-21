# Express - Exercise #3 - POST requests

## Write a user login - powered by POST

* Create a server.js file
* Install express
* In server.js - Setup an express application
* Pase in the following array of users:
    let users = [
        {username: "User1", password: "PW1"},
        {username: "User2", password: "PW2"},
        {username: "User3", password: "PW3"},
    ]
* Parse incoming post data by using app.use(express.urlencoded())
* Define a GET route /login
* Define a POST route /login
* Route GET /login
    * provides a form where a user can enter "username" and "password"
    * On Submit: Send the user to the route POST /login
* Route POST /login
    * read the sent form data from req.body
    * the form fields are accessible like so: 
        req.body.username, req.body.password
    * Now check: Does this username with this pw exist in our array?
    * If so: Send back the message "Login successful"
    * If not: Send back the message "Login failed"

