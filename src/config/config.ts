import sql from 'mssql';
import { env } from './environment';

let node_env = 'development';

if (process.env.NODE_ENV == 'production' || (<any>process).pkg) {
    node_env = 'production';
    console.log("Start Production Mode");
} else {
    console.log("Start Development Mode");
}

const defaultConfig = (node_env === 'production' ? env.production : env.development);

const dbconfig: sql.config = {
    user: defaultConfig.DB_USERNAME,
    password: defaultConfig.DB_PASSOWRD,
    server: defaultConfig.DB_SERVER || '',
    pool: {
        max: 30,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        database: defaultConfig.DB_DATEBASE,
        encrypt: false,
    },
};

interface config {
    port: string | number | undefined
    wsport: string | number | undefined
    dbconfig: sql.config
}
const config = {
    port: defaultConfig.HTTP_SERVER_PORT,
    wsport: defaultConfig.WS_SERVER_PORT,
    dbconfig: dbconfig
};

export { config };