const mongoose = require("mongoose")
mongoose.set('useCreateIndex', true)

const VideoSchema = new mongoose.Schema({
    title: { type: String },
    actor: { type: String },
    alias: { type: String },
    area: { type: String },
    director: { type: String },
    downloads: { type: mongoose.Schema.Types.Mixed },
    language: { type: String },
    length: { type: String },
    poster: { type: String },
    plot: { type: String },
    plays: { type: mongoose.Schema.Types.Mixed  },
    update: { type: String },
    released: { type: String },
    status: { type: String },
    videotype: { type: String },
})

module.exports = {
    videos: mongoose.model("video", VideoSchema, "video"),
}
