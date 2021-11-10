const mongoose = require("mongoose");//conexion

const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb+srv://admin:12345@cluster0.jwgju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"));
}
