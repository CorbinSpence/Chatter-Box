const connection = require('../config/connection')
const {userData, thoughtData} = require('./data')
const {Reaction, Thought, User} = require('../models')

connection.on('error', (err)=>err)

connection.once('open', async () => {

    await Thought.deleteMany({})

    await User.deleteMany({})

    await User.insertMany(userData)

    await Thought.insertMany(thoughtData)

    console.log('Seeding successful.')

})