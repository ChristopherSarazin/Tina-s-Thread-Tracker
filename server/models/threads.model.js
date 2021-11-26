const mongoose = require('mongoose');

const ThreadsSchema = new mongoose.Schema({

    title:{
        type: String,
        required:[true, "Title is required!"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    
    colorName: {
        type: String,
        required:[true, "Color Name is required!"],
        minlength: [2, "Color Name must be at least 2 characters long"]
    },
    colorCode: {
        type: String,
        required:[true, "Color Code is required!"],
        minlength: [2, "Color Code must be at least 2 characters long"]
    },
    amountOwned: {
        type: Number, default: 0
    }

})

const Threads = mongoose.model("Threads", ThreadsSchema)

module.exports = Threads;