const {Types, Schema} = require('mongoose')

const thoughtSchema = new Schema(
    {
        thoughtId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        thoughtText:{
            type:String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt:{
            type: Date,
            default: Date.now()
        },
        username:{
            type:username,
            required: true
        },
        reactions:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ] 
    },
    {
        toJSON: {
            getters: true,
          },
        id: false
    }
)

module.exports = thoughtSchema