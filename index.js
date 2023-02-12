import app from './app.js';
import { __dirname } from './globals.js';
import http from 'http';
import { createDB } from './utils/db.js';

const server = http.createServer(app);




server.listen(4000, async ()=>{
    console.log('App running on port 4000');
    const db = createDB(__dirname);
    await db.read()
    db.data ||= { contacts: [], messages: [] }             
    await db.write()
})
