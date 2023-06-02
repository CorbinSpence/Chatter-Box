const {Thought} = require('../models')

module.exports = {
    getThoughts(req, res){
        Thought.find()
        .then((thoughts)=>{
            res.json(thoughts)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    getOneThought(req, res){
        Thought.findOne({_id: req.params.id})
        .then((thought)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    createThought(req, res){
        Thought.create(req.body)
        .then((thought)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    deleteThought(req, res){
        Thought.findOneAndDelete({_id: req.params.id})
        .then((thought)=>{
            !thought? res.status(404).json("ID not found"): res.json("Thought deleted.")
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$set:req.body},
            {runValidators: true, new: true}
        )
        .then((thought)=>{
            !thought? res.status(404).json("ID not found"): res.json(thought)
            
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    createReaction(req, res){
        Thought.updateOne(
            {_id: req.params.thoughtId},
            {$push: {reactions: req.body}}
            )
        .then((thought)=>{
            res.json(thought)
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    deleteReaction(req, res){
        Thought.updateOne(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {$elemMatch:{reactionId:req.body.reactionId}}}}
            )
        .then((thought)=>{
            res.json(thought)
        }).catch((err)=>{
            res.status(500).json(err)
        })
    }
}