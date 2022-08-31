const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')

// LOAD CONFIG
dotenv.config({path: './config/config.env'})

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static('public'))
app.use(bodyParser.json())

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(client => {
    console.log('Connected to Database')
    const db = client.db('stateWages')
    const wagesCollection = db.collection('wages')

        app.listen(process.env.PORT, function(){
            console.log(`listening on ${process.env.PORT}`)
        })
        
        app.get('/', (req, res) => {
            db.collection('wages').find().toArray()
              .then(results => {
                res.render('index.ejs', { quotes: results })
              })
            .catch(error => console.error(error))
          })

        app.post('/newWage', (req, res) => {
          wagesCollection.insertOne(req.body)
            .then(result => {
            console.log(result)
            // res.redirect('/')
            })
            .catch(error => console.error(error))
        })

        app.delete('/wages', (req, res) => {
            wagesCollection.deleteOne(
              { amount: req.body.amount,
                frequency: req.body.frequency,
                state: req.body.state }
            )
              .then(result => {
                console.log(result)
              })
              .catch(error => console.error(error))
          })

  
    })
    .catch(error => console.error(error))

    




// app.listen(3000, function(){
//     console.log('listening on 3000')
// })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// })

// app.post('/quotes', (req, res) => {
//     console.log(req.body)
// })

console.log(__dirname)