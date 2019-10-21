const express = require('express')
const app = express()
const methodOverride = require('method-override')

const { voyageRouter } = require('./controllers/voyage.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')


app.use('/', voyageRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
