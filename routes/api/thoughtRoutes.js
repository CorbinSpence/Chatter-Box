const router = require('express').Router()
const {
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController')

// returns all thoughts
router.route('/').get(getThoughts).post(createThought)

// returns thought with id param
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)

// create reaction
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router