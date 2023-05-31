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
        Thought.findOne({_id: req.params.courseId})
        .then((thought)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    createThought(){
        Thought.create(req.body)
        .then((thought)=>{
            res.json(thought)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    deleteThought(){
        Thought.findOneAndDelete({_id: req.params.courseId})
        .then((thought)=>{
            !thought? res.status(404).json("ID not found"): res.json("Thought deleted.")
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    updateThought(){
        Thought.findOneAndUpdate(
            {_id: req.params.courseId},
            {$set:req.body},
            {runValidators: true, new: true}
        )
        .then((thought)=>{
            !thought? res.status(404).json("ID not found"): res.json(thought)
            
        }).catch((err)=>{
            res.status(500).json(err)
        })
    }
}