const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const { update } = require('./models/user')
//const multer = require('multer')

const userRouter = require('./routers/user')

const taskRouter = require('./routers/task')

const app = express()
// const port = process.env.PORT 

// const multer = require('multer')


// const upload = multer({
//     dest: 'image'
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })


// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })



app.use(express.json())

app.use(userRouter)

app.use(taskRouter)


// const router = new express.Router()

// router.get('/test', (req,res) => {
//     res.send('thos is from my router ')
// })

// app.use(router)


// const jwt = require('jsonwebtoken')

// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123'}, 'thiis', {expiresIn: '7 days'})

//     console.log(token) 

//     const data = jwt.verify(token,'thiis')

//     console.log(data)


    
// }


// myFunction()





// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })




// //const Task = require('./models/task')
// //const User = require('./models/user')


// const main = async () => {
//     const user = await User.findById('5fb242bb13f02805704d8ca3')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
    
// }

// main()

module.exports = app