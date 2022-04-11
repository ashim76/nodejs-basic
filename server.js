const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
// console.log(__filename);

// to parse incoming url data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.query);

    // console.log("doing some server side business logic code here ");

    res.send(`<div>
        <h1>Hello world! </h1>
        <p>This is my website</p>
        <a href="/login">Go to login page</a>

    </div>`);
});

const fn = __dirname + "/userList.text";
app.post("/", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const str = email + ":" + password + "\n";
    fs.writeFile(fn, str, (error) => {
        if (error) {
            console.log(error);
            res.send("OooOOps ! Something went wrong");
        }
    });

    res.send("Congrats!! Registration Succesful 🎉");
});

app.get("/login", (req, res) => {
    console.log("login requested ");

    res.sendFile(__dirname + "/form.html");
});
app.listen(8000, (error) => {
    if (error) {
        console.log("ERROR:", error);
    }

    console.log("your server is served at http://localhost:8000");
});