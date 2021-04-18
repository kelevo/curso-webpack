// Requiere de fs (File System)
const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`);