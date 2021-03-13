const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();
const port = 8080;

app.use(express.static("public"));

// Set handlebars as the default view engine.
app.engine("hbs",
    expressHandlebars({
        defaultLayout: "main",
        extname: ".hbs",
    })
);

app.set("view engine", "hbs");


// Pages
app.get("/", (req, res) => {
    res.render("index");
});


// App listening.
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});