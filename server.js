const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv')
const { response } = require('express')

// LOAD CONFIG
dotenv.config({path: './config/config.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

function wageToHourly(freq, conversion){
  let wageConversion = {
  Yearly: 2080,
  Monthly: 173.33,
  Weekly: 40,
  Hourly: 1
}
wageConversion.reduce = function(freq, conversion){
  return wage / (freq == "yearly" ? this.Yearly : freq == "monthly" ? this.Monthly : freq == "weekly" ? this.Weekly : this.Hourly) * conversion
}

  return wageConversion.reduce(freq, wageConversion.Hourly) 
}

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(client => {
    console.log('Connected to Database')
    const db = client.db('stateWages')
    const wagesCollection = db.collection('wages')

        app.listen(process.env.PORT, function(){
            console.log(`listening on ${process.env.PORT}`)
        })
        
        app.get('/', async (req, res) => {
            let allWages = await wagesCollection.find().toArray()
            let state = await wagesCollection.find().sort({_id:-1}).limit(1).toArray()
            let stateWages = await allWages.filter(x => x.state == state)
            res.render('index.ejs', { stateWage: stateWages, nationalWage: allWages, lastState: state})
          })

        app.post('/newWage', (req, res) => {
          wagesCollection.insertOne(req.body)
            .then(result => {
            console.log(result)
            res.redirect('/')
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

console.log(__dirname)