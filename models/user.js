const {Types, Schema, model} = require('mongoose')
const Thought = require('./thought')

const userSchema = new Schema(
    {
        username:{
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        email:{
            type: String,
            require: true,
            unique: true,
            match:/.+\@.+\..+/,
            trim: true
        },
        thoughts:[
            Thought.schema
        ],
        friends:[
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
        
    },
    {
        toJSON: {
            getters: true,
          },
        id: true
    }
)
const User = model("user", userSchema)

module.exports = User