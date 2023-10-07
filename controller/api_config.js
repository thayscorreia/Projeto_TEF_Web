import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./database_tef.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) return console.error(err.message)
})


export { db }