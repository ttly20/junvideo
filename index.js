// create app
const express = require("express")
const app = express()

// router
app.use(require("cors")())
require(__dirname + "/routers")(app)

// set database
require(__dirname + "/plugins/db")(app, "mongodb://127.0.0.1:27017/videos")

// error function
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        message: err.message
    })
})

// listen 3001
app.listen(3001, () => {
    console.log("The App running 3001 port\n" +
                "Please open: localhost:3001")
})
