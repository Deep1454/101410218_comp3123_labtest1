const fs = require('fs').promises;
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

async function createLogFiles() {
    await fs.mkdir(logsDir).catch(() => {});
    process.chdir(logsDir);

    for (let i = 1; i <= 10; i++) {
        await fs.writeFile(`log${i}.txt`, `This is log file #${i}.`);
        console.log(`log${i}.txt`);
    }
}

createLogFiles();
