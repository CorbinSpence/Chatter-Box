const connection = require('../config/connection')
const {userData, thoughtData} = require('./data')
const {Reaction, Thought, User} = require('../models')

connection.on('error', (err)=>err)

connection.once('open', async () => {

    await Thought.deleteMany({})

    await User.deleteMany({})

    await Thought.insertMany(thoughtData)

    await User.insertMany(userData)

    console.log('Seeding successful.')

})