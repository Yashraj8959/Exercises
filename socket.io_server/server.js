const app = require('./src/app')

const port = process.env.PORT || 3000


const server = require('http').createServer(app);   // Create an HTTP server and pass the Express app to it
const io = require('socket.io')(server);
io.on('connection', socket => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

});
server.listen(port, () => {          // Start the server on the specified port
    console.log(`Server is running on port ${port}`)
})
