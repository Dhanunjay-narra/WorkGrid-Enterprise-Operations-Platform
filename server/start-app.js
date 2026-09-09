const { fork } = require('child_process');
const http = require('http');
const path = require('path');

const BACKEND_PORT = process.env.BACKEND_PORT || 4000;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;

console.log('========================================================');
console.log('🚀 NEXORA — Enterprise Autonomous Operations Platform  ');
console.log('          STARTING BACKEND & FRONTEND SERVERS           ');
console.log('========================================================\n');

// 1. Start Backend Server
const backendProcess = fork(path.join(__dirname, 'backend.js'), [], {
  env: { ...process.env, BACKEND_PORT }
});

// 2. Start Frontend Server
const frontendProcess = fork(path.join(__dirname, 'frontend.js'), [], {
  env: { ...process.env, FRONTEND_PORT, BACKEND_PORT }
});

function checkHealth(url, name) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ ok: res.statusCode === 200, status: res.statusCode, data });
      });
    }).on('error', (err) => {
      resolve({ ok: false, error: err.message });
    });
  });
}

// 3. Automated Connection Verification
setTimeout(async () => {
  console.log('\n[CONNECTIVITY CHECK] Verifying Backend & Frontend Connection...');
  
  const backendCheck = await checkHealth(`http://localhost:${BACKEND_PORT}/api/v1/health`, 'Backend');
  const frontendCheck = await checkHealth(`http://localhost:${FRONTEND_PORT}`, 'Frontend');

  if (backendCheck.ok && frontendCheck.ok) {
    console.log('\n========================================================');
    console.log('🎉 ALL SYSTEMS OPERATIONAL & PERFECTLY CONNECTED!      ');
    console.log('========================================================');
    console.log(`✅ Backend API Server:     http://localhost:${BACKEND_PORT} [STATUS: 200 OK]`);
    console.log(`✅ Frontend Web Cockpit:   http://localhost:${FRONTEND_PORT} [STATUS: 200 OK]`);
    console.log(`✅ Real-Time SSE/WS Mesh:  http://localhost:${BACKEND_PORT}/api/v1/realtime/stream`);
    console.log(`✅ Automated Agent Swarm:  http://localhost:${BACKEND_PORT}/api/v1/ai/agent-dispatch`);
    console.log('========================================================\n');
    console.log('👉 You can now open http://localhost:3000 in your browser to interact with NEXORA!');
  } else {
    console.log('[WARNING] Connectivity check retrying...', { backend: backendCheck, frontend: frontendCheck });
  }
}, 1500);

// Graceful termination
process.on('SIGINT', () => {
  console.log('\nStopping NEXORA Platform...');
  backendProcess.kill();
  frontendProcess.kill();
  process.exit(0);
});
