import WebSocket, { WebSocketServer } from 'ws';
import { Express } from 'express';
import { config } from './src/config/config';

interface WSocket {
    app: Express,
    wsServer: WebSocket.Server<WebSocket>
}

class WSocket {
    constructor(app: Express, config: config) {
        this.app = app;
        app.set('port', config.wsport || 1337);
        this.wsServer = new WebSocketServer({
            server: app.listen(app.get('port'), () => {
                console.log('Start Socket Service : ', app.get('port'), ' port');
            })
        });
        this.wsServer.on('connection', (ws: WebSocket) => {
            ws.on('message', (data: WebSocket.RawData) => {
                console.log('received: %s', data);
            });
            ws.send('something');
        });
    }

}

export default WSocket;