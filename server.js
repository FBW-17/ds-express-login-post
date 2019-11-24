const express = require("express")
const api = express()

api.listen(3000, () => console.log("Server started at port 3000"))

let users = [ 
    {username: "User1", password: "PW1"}, 
    {username: "User2", password: "PW2"}, 
    {username: "User3", password: "PW3"}
]


// body parser middleware
    // urlencoded means this format: name=Rob&age=36
api.use(express.urlencoded({extended: false}))

// GET serves us with either UIs or data
api.get("/login", (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            Username: <input name="username"><br />
            Password: <input name="password" type="password"><br />
            <button type="submit">Login</button>
        </form>
    `)
})

// POST routes RECEIVE data
api.post("/login", (req, res) => {

    let userPOST = req.body    
    console.log(userPOST)
    
    // some method for checking if an item 
    // exists in an array
    // some() is nice if we just want to check IF some entry exists in an 
    // array. It gives us back "true" if something was found, and "false" if not
    let userFound = users.some(user => {
        return user.username == userPOST.username && 
            user.password == userPOST.password
    })

    // THIS is doing the same as above with forEach
    
    // users.forEach(user => {
    //     if(user.username == userPOST.username && 
    //         user.password == userPOST.password) {
    //             userFound = true
    //         }
    // })

    if(userFound) {
        res.send("Login succesful")    
    }
    else {
        res.send("Login not succesful")    
    }

})
