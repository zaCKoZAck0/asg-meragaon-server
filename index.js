import app from './app.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config()
import { __dirname } from './globals.js';
import http from 'http';
import { createDB } from './utils/db.js';

const server = http.createServer(app);
const PORT = process.env.PORT



server.listen(PORT, async ()=>{
    console.log(`App running on port ${PORT}`);
    // assigning default values to DB
    const db = createDB(__dirname);
    await db.read()
    db.data ||= { contacts: [], messages: [] }             
    await db.write()
})
