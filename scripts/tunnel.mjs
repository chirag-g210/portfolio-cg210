import { startTunnel } from 'untun';

async function main() {
  console.log('🚀 Starting Cloudflare Tunnel for http://localhost:5173 ...\n');
  try {
    const tunnel = await startTunnel({
      url: 'http://localhost:5173',
      acceptCloudflareNotice: true,
    });
    
    const url = await tunnel.getURL();
    console.log('====================================================');
    console.log('🎉 Public Live URL (Accessible on any device/network):');
    console.log(`👉 ${url}`);
    console.log('====================================================\n');
    console.log('Press Ctrl + C in this terminal to stop the tunnel.\n');
  } catch (err) {
    console.error('Failed to start tunnel:', err);
  }
}

main();
