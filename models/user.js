const {Types, Schema, model} = require('mongoose')

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
const User = model("user", userSchema)

module.exports = User