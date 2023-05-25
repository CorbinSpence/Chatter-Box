const {connect, connection} = require("mongoose")

const mongoDbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB'

connection(mongoDbURI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection