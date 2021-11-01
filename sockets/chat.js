module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('chat socket was activated');
        socket.on('clientMessage', (msg) => {
            console.log(`Mensagem: ${msg}`);
            io.emit('serverMessage', msg);
        });
    });
}