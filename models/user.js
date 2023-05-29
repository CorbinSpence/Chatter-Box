const {Types, Schema} = require('mongoose')

const userSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        email:{
            type: String,
            required: true,
            unique: true,
            trimmed: true
        },
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
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
        id: false
    }
)

module.exports = userSchema