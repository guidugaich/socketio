module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.emit('ola', 'bão demais uai, chegou no socket');

        socket.on('ping', () => {
            console.log(`${socket.id} emitiu um ping`);
            io.emit('pong', `${socket.id} emitiu um pong`);
        });
    });
}