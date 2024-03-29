var mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wrfcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('db connected');
    }
});

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    dateTime: { date: String, time: String }
});

const Message = mongoose.model("message", messageSchema);


module.exports = Message;

