const router = require('express').Router()
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController')


// returns all users
router.route('/').get(getUsers).post(createUser)

// returns user with id param
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router