module.exports = (app, database) => {
    const mongoose = require("mongoose")
    try {
        mongoose.connect(database, {
            useNewUrlParser: true
        })
    }
    catch (err) {
        console.log(err)
    }
}
