require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');


mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Database connected')
}).catch((e)=>{
    console.log('error in connecting to database',e);
})

app.listen(process.env.PORT,()=>{
    console.log('Server listening on ',process.env.PORT)
})