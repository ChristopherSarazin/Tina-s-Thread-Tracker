const express = require('express');
const cors = require("cors");
const cookies = require("cookie-parser");
const app = express();
const port = 8000;

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information
app.use(cors({credentials: true, orgin: 'http://localhost:3000'})); //tells the app that it is allowed to share resources with a react application
app.use(cookies());


require("./server/config/threads.config");


require("./server/routes/threads.routes")(app)



app.listen(port, () => console.log(`Listening on port: ${port}`))