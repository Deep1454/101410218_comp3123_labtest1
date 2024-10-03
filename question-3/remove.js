const fs = require('fs').promises;
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

async function removeLogFiles() {
    try {
        const files = await fs.readdir(logsDir); 
        
        await Promise.all(files.map(file => fs.unlink(path.join(logsDir, file))));
        console.log(`Deleted files: ${files.join(', ')}`);
        
        await fs.rmdir(logsDir);
        console.log('Logs directory removed.');
    } catch (error) {
        console.error('Error removing log files or directory:', error.message);
    }
}

removeLogFiles();
