import { spawn } from 'node:child_process';
import path from 'node:path';
import os from 'node:os';

const cloudflaredBin = path.join(os.homedir(), 'AppData', 'Local', 'Temp', 'node-untun', 'cloudflared.2026.7.2.exe');

console.log('==================================================');
console.log('STARTING CLOUDFLARE QUICK TUNNEL');
console.log('Forwarding: http://localhost:5173');
console.log('Press Ctrl + C to stop the tunnel.');
console.log('==================================================\n');

const child = spawn(cloudflaredBin, ['tunnel', '--url', 'http://localhost:5173'], {
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
