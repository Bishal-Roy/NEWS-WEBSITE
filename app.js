const express = require('express');
const newsRouter = require('./src/routes/news')
const bodyParser = require('body-parser')

const app = express();

const config= {
    port: 5000
}

app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))
app.use('/js', express.static(__dirname + '/public/js'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : true}))

app.use('/', newsRouter)
app.use('/article', newsRouter)

app.listen(config.port,()=>{
    console.log(`listen on port ${config.port}`);
})