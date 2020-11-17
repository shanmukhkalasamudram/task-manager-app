// CRUD create read update delete


const {MongoClient,ObjectID} = require('mongodb')
//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Shanmukh',
    //     age: 21
    // })
    // db.collection('users').insertOne({
    //     name: 'Sai',
    //     age: 21
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the my room',
    //         completed: true
    //     },{
    //         description: ' inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })
   
    // db.collection('tasks').findOne({description: 'Clean the my room'}, (error,user) => {
    //     if (error) {
    //                return console.log('Unable to fing!')
    //              }
        
    //              console.log(user)

    // })

    // db.collection('tasks').findOne({_id : new ObjectID("5faeca1201774327c0915b4b")}, (error,user) => {
    //     if (error) {
    //                return console.log('Unable to fing!')
    //              }
        
    //              console.log(user)

    // })

    // // db.collection('users').find({age: 21 }).toArray((error,users) => {
    // //     console.log(users)
    // // })

    // db.collection('users').find({age: 21 }).count((error,count) => {
    //     console.log(count)
    // })



    //UPdate using promise method 

    // set changes the value 
    
    //  db.collection('users').updateOne({
    //      _id: new ObjectID("5faec21c5481fc37d4e5434a")
    //  }, {
    //     $set: {
    //         age: 10
    //      }
    //  }).then((result) => {
    //      console.log(result)
    //  }).catch((error) => {
    //      console.log(error)
    //  })

    // inc increases by 
    //  db.collection('users').updateOne({
    //     _id: new ObjectID("5faec21c5481fc37d4e5434a")
    // }, {
    //    $inc: {
    //        age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').deleteOne({
    //     description: "Clean the house"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
            age: 27
         }).then((result) => {
             console.log(result)
         }).catch((error) => {
             console.log(error)
         })
    


})