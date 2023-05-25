const express = require("express")
const db = require("./config/connection")
const routes = require("./routes")

const PORT = process.env.PORT || 3001
const app = express()

// parses reqs with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// parses reqs with json payloads
app.use(express.json());
app.use(routes);
db.once('open', ()=>{
    app.listen(PORT, ()=>{console.log(`Server live at localhost:${PORT}.`)})
})
