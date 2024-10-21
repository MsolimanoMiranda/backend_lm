import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongosse from 'mongoose'
import router from './routes'
import bodyParser from 'body-parser'

mongosse.Promise = global.Promise;
const dbUrl= 'mongodb+srv://msolimano:msolimano@solimain.fcbkxvj.mongodb.net/dbSistema?retryWrites=true&w=majority&appName=solimain';
mongosse.connect(dbUrl,{ useNewUrlParser: true}).then(
  mongosse => console.log('conectado correcto')
).catch(
  err => console.log(err)
)
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use('/api', router)
app.use(morgan('dev'))
app.use(cors())
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'),()=>{
  console.log(`server port run in ${app.get('port')}`)
})


