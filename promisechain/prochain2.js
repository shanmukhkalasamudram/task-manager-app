require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5faff110e540cf3c08c5025d').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5faff11c47e1e449f09cd0cf').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})