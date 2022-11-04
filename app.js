const express = require('express');
const app = express();
const mainRouter = require('./src/routes/mainRoutes');
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

app.set('view engine', 'ejs')
app.use(express.static(publicPath));
app.use('/', mainRouter)
app.listen(3000,()=>{
    console.log('servidor corriendo en el puerto 3000');
})