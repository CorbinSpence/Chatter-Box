const {Types, Schema, model} = require('mongoose')
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type:String,
            require: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt:{
            type: Date,
            default: Date.now()
        },
        username:{
            type:String,
            require: true
        },
        reactions:[
            reactionSchema
        ] 
    },
    {
        toJSON: {
            getters: true,
          },
        id: true
    }
)

const Thought = model("thought", thoughtSchema)

module.exports = Thought