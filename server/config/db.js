let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://duggalvaibhav:Shriharidas321@cluster0.sgb0dnc.mongodb.net/'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
