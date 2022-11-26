import sql, { ConnectionPool, ConnectionError } from 'mssql';
import { config } from '../config/config';

async function getConnPool(): Promise<ConnectionPool | undefined> {
  let dbPool: sql.ConnectionPool | undefined;
  const connPool: void = await new ConnectionPool(config.dbconfig)
    .connect()
    .then((pool: ConnectionPool) => {
      console.log('DB Connect Success.');
      dbPool = pool
    })
    .catch((err: ConnectionError) => {
      console.log('err ', err);
    });
  return dbPool || undefined;
}

export { sql, getConnPool };