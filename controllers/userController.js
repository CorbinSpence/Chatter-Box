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
        User.findOne({_id: req.params.id})
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    createUser(req, res){
        User.create(req.body)
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    },
    deleteUser(req, res){
        User.findOneAndDelete({_id: req.params.id})
        .then((user)=>{
            !user? res.status(404).json("ID not found"): res.json("Thought deleted.")
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$set:req.body},
            {runValidators: true, new: true}
        )
        .then((user)=>{
            !user? res.status(404).json("ID not found"): res.json(user)
            
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    addFriend(req, res){
        User.updateOne(
            {_id:req.params.userId},
            {$push: {friends: req.params.friendId}}
        ).then((user)=>{
            !user? res.status(404).json("ID not found"): res.json(user)
            
        }).catch((err)=>{
            res.status(500).json(err)
        })
    },
    deleteFriend(req, res){
        User.updateOne(
            {_id:req.params.userId},
            {$pull: {friends:req.params.friendId}}
        ).then((user)=>{
            !user? res.status(404).json("ID not found"): res.json(user)
            
        }).catch((err)=>{
            res.status(500).json(err)
        })
    }
}