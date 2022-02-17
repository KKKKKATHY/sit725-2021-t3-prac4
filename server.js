let express = require("express");
let app = express();
let db = require("./database/connection")

//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

var port = process.env.PORT || 8080;
var res_back = null

app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.get("/init", (req, response) => {
  console.log('-> server recv: init')
  db.getDatabase().collection("page-content").find({}).toArray(function(err, res){
    if(err) {
      throw err
    }
    res_back = res
    response.send(res)
  })
});

app.get("/two", (req, res) => {
  console.log('-> server recv: two')
  res.send(res_back)
})

app.get("/init2", (req, res) => {
  console.log('-< server recv: init2')
  res.send(res_back)
})


//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

db.connectDatabase((err) => {
  if (err) {
    console.error(err)
    process.exit() // nodejs
  }
  
  http.listen(port,()=>{
    console.log("Server Listening on port ", port);
  });
})
