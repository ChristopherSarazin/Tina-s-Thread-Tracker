const ThreadsController = require("../controllers/threads.controller");


module.exports = app => {
    app.get("/api", ThreadsController.helloworld);
    app.get("/api/threads", ThreadsController.findAllThreads);
    app.post("/api/threads", ThreadsController.createNewThreads);
    app.get("/api/threads/random", ThreadsController.findRandomThreads);
    app.get("/api/threads/:id", ThreadsController.findOneThread);
    app.put("/api/threads/:id", ThreadsController.updateExistingThreads);
    app.delete("/api/threads/:id", ThreadsController.deleteThreads);

}