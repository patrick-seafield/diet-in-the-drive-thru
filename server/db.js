import sqlite3 from 'sqlite3'
import path from 'path'

const db = new sqlite3.Database( path.resolve(__dirname, 'drive-thru.db'))

export default db
