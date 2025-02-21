const app = require('./src/app')

const port = process.env.PORT || 3000


const server = require('http').createServer(app);   // Create an HTTP server and pass the Express app to it
const io = require('socket.io')(server);
io.on('connection', socket => {
    socket.on('message', (data) => {
        console.log('Received message:', data);
        io.emit('chat-message', data);  // Broadcast the message to all connected clients
    })
    console.log('User connected');  // Log when a user connects to the server
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })

});
server.listen(port, () => {          // Start the server on the specified port
    console.log(`Server is running on port ${port}`)
})
