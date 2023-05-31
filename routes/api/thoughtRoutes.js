const router = require('express').Router()

// returns all thoughts
router.get('/', (req, res)=>{

})

// returns thought with id param
router.get('/:id', (req, res)=>{
    
})

//creates new thought
router.post('/', (res, req)=>{

})

// Update thought by id param
router.post('/:id', (req, res)=>{

})

// create reaction
router.post('/:thoughtId/reactions', (req, res)=>{
    
})

// deletes thought
router.delete('/:id', (req, res)=>{
    
})


// delete reaction
router.delete('/:thoughtId/reactions', (req, res)=>{
    
})

module.exports = router