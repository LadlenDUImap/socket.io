const net = require('net');

// создаем сервер
const server = net.createServer(socket = > {
        console.log('connected'); // клиент присоединился
        socket.end('hello'); // отвечаем и закрываем соединение
});

server.listen('https://socket.io.local:8008'); // слушаем сокет
