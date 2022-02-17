const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://KATHY:Ju5Td3C77pSI8LCD@cluster0.v9zsp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var dbConnection;

module.exports = {
    connectDatabase: function(callback) {
        client.connect(function(err, db) {
            if (err || !db) {
                return callback(err)
            }
        })
        dbConnection = client.db('project-kathy')
        console.log('server connected to mongodb atlas')
        return callback()
    },

    getDatabase: function() {
        return dbConnection
    }
}