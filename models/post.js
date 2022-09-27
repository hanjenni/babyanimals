const mongoose = require('mongoose');

// const likesSchema = mongoose.Schema({
//     username: String,
//     userId: { type: mongoose.Schema.Types.ObjectId }
// })

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    photoUrl: String,
    caption: String,
    // likes: [likeSchema]
})

module.exports = mongoose.model('Post', postSchema);