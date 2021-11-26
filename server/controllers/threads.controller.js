const Threads = require("../models/threads.model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.findAllThreads = (req, res) => {
    Threads.find()
        .then(allThreads => {
            res.json({ results: allThreads })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.createNewThreads = (req, res) => {
    Threads.create(req.body)
        .then(newThreadsObj => {
            res.json({ results: newThreadsObj })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findOneThread = (req, res) => {
    console.log("finding thread")
    console.log(req.params.id)
    Threads.findOne({ _id: req.params.id })
        .then(foundThreads => {
            res.json({ results: foundThreads })
        })
        .catch(err => {
            res.json({ err: err })
        })
}


module.exports.updateExistingThreads = (req, res) => {
    Threads.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedThreads => {
            res.json({ results: updatedThreads })
        })
        .catch(err => {
            res.json({ err: err })
        })

}

module.exports.deleteThreads = (req, res) => {
    Threads.deleteOne({ _id: req.params.id })
        .then(deletedThreads => {
            res.json({ results: deletedThreads })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findRandomThreads = (req, res) => {
    console.log("finding random Threads")
    Threads.find()
        .then(allThreads => {
            console.log("all Threads")
            let lengthOfAllThreads = allThreads.length;


            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let randomIndex = getRandomInt(lengthOfAllThreads)

            console.log(allThreads[randomIndex])
            res.json({ results: allThreads[randomIndex] })
        })
        .catch(err => {
            res.json({ err: err })
        })
}