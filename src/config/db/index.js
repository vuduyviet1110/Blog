const mongoose=require('mongoose');

async function connect() {
    try {
       await  mongoose.connect('mongodb://localhost/courses_dev')
         console.log('Connected to database successfully....')
    } catch (e) {
        console.log('Failed to connect to database' )
    }
}



module.exports = {connect};