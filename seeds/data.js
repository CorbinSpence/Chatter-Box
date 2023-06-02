var userData = []
var thoughtData = []

thoughtData.push({thoughtText:'hi', username:'andrew', reactions:[]})
thoughtData.push({thoughtText:'hi', username:'ben', reactions:[]})
thoughtData.push({thoughtText:'hi', username:'jeff', reactions:[]})
thoughtData.push({thoughtText:'hi', username:'marcy', reactions:[]})
thoughtData.push({thoughtText:'hi', username:'marcy', reactions:[]})

userData.push({username:'andrew', email:'andrew@gmail.com', thoughts:[thoughtData[0]], friends:[]})
userData.push({username:'lucy', email:'lucy@gmail.com', thoughts:[], friends:[]})
userData.push({username:'ben', email:'ben@gmail.com', thoughts:[thoughtData[1]], friends:[]})
userData.push({username:'jeff', email:'jeff@gmail.com', thoughts:[thoughtData[2]], friends:[]})
userData.push({username:'marcy', email:'marcy@gmail.com', thoughts:[thoughtData[3], thoughtData[4]], friends:[]})

// userData[0].friends.push(userData[1])
// userData[0].friends.push(userData[2])

// userData[1].friends.push(userData[0])
// userData[1].friends.push(userData[2])

// userData[2].friends.push(userData[0])
// userData[2].friends.push(userData[1])

module.exports = {userData, thoughtData}