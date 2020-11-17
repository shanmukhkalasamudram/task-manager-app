const mongoose = require('mongoose')
const { required } = require('yargs')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// const me = new User({
//     name: 'Shan',
//     age: '20',
//     email: 'shanmukhalasamudram@gmail.com',
//     password: 'shanmukh@good'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {

//     des: {
//         type: String,
// required: true,
// trim : true
//     },
//     completed: {
//         type: Boolean,
//          default: false

//     }

// })

// const  task = new Task ({
//     des: 'Bath',
//     completed: false
// })

// task.save().then(() => {
//         console.log(task)
//      }).catch((error) => {
//          console.log('Error!', error)
//      })