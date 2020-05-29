require('dotenv').config()
const express = require('express')
const massive= require("massive")
const editRides = require('./Controllers/editRides')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
connectionString: CONNECTION_STRING,
ssl: {rejectUnauthorized: false}
})
    .then(dbInstance => {
        app.set("db", dbInstance)
    })
    .catch(err => console.log(err))

app.use(express.json())

app.get("/api/rides", editRides.view)
app.post("/api/rides", editRides.create)
app.put("/api/rides/:rideId", editRides.update)
app.delete("/api/rides/:rideId", editRides.delete)


app.listen(SERVER_PORT, () => 
console.log(`Starting on port ${SERVER_PORT}`))

