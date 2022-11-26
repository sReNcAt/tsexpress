import { config } from './src/config/config';
import express, { Express } from 'express';
import { partRouter } from './src/router/part';
import { sql, getConnPool } from './src/model/model';
import cors from 'cors';
import WSocket from './websocket';
import './src/types/common';

const wsapp: Express = express();
const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('port', config.port || 3000);
/** enable cors */
app.use(cors());
/** enable pre-flight cors */
app.options('*', cors());
/** DB Connection Use Express Local Storge */
getConnPool().then((connPool: sql.ConnectionPool | undefined) => {
    app.locals.db = connPool;
    app.set('db', connPool);
    const wsServer: WSocket = new WSocket(wsapp, config);
    app.set('wsServer', wsServer);
});
app.use('/webservice', partRouter);

app.listen(app.get('port'), () => {
    console.log('Start Web Service : ', app.get('port'), ' port');
});
