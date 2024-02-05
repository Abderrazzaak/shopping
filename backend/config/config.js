
// const mongoose = require("mongoose");


// const dbConnect = async () => {
//   try {
    

//       mongoose.set('strictQuery', true);
//       console.log('Connected s')
//       const conn = await mongoose.connect("mongodb+srv://abderrazzak:ZALGaQsm6q7k0120@cluster0.wsylvuz.mongodb.net/?retryWrites=true&w=majority")
//       console.log('Connected succefully ')
//   } catch (error) {
//       console.log(error);
//   }
// }

const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.DB_URL)
        console.log('Connected succefully ')
    } catch (error) {
        console.log(error);
    }
}

module.exports = { dbConnect }