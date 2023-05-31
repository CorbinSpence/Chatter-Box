const {Thought, User} = require('../models')

module.exports = {
    getUsers(req, res){
        User.find()
        .then((users)=>{
            res.json(users)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    getOneUser(req, res){
        User.findOne({_id: req.params.courseId})
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    createUser(){
        User.create(req.body)
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    deleteUser(){
        User.findOneAndDelete({_id: req.params.courseId})
        .then((user)=>{
            !user? res.status(404).json("ID not found"): res.json("Thought deleted.")
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    updateUser(){
        User.findOneAndUpdate(
            {_id: req.params.courseId},
            {$set:req.body},
            {runValidators: true, new: true}
        )
        .then((user)=>{
            !user? res.status(404).json("ID not found"): res.json(user)
            
        }).catch((err)=>{
            res.status(500).json(err)
        })
    }
}