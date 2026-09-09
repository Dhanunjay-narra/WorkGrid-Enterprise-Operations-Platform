import http from 'http';
import { APP_CONFIG, PASTEL_PALETTE } from '@nexora/config';

export class ApiGateway {
  private server: http.Server;

  constructor(private port: number = 4000) {
    this.server = http.createServer((req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
      }

      if (req.url === '/health' || req.url === '/api/v1/health') {
        res.writeHead(200);
        res.end(JSON.stringify({
          status: 'HEALTHY',
          uptime: process.uptime(),
          version: APP_CONFIG.version,
          theme: PASTEL_PALETTE
        }));
        return;
      }

      if (req.url === '/api/v1/auth/login' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          let payload = { username: '', password: '', role: 'Executive' };
          try { payload = JSON.parse(body); } catch (e) {}
          res.writeHead(200);
          res.end(JSON.stringify({
            success: true,
            message: 'Authentication successful',
            token: 'jwt_nexora_' + Math.random().toString(36).substring(2, 12),
            user: {
              name: 'Dhanunjay Narra',
              name: payload.username ? payload.username.split('@')[0] : 'Dhanunjay Narra',
              email: payload.username || 'architecture@nexora.io',
              role: payload.role || 'Principal Architect',
              role: payload.role || 'Executive',
              tenant: 'NEXORA Enterprise Global'
            }
          }));
        });
        return;
      }

      if (req.url === '/api/v1/auth/forgot-password' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          let payload = { email: '' };
          try { payload = JSON.parse(body); } catch (e) {}
          res.writeHead(200);
          res.end(JSON.stringify({
            success: true,
            message: `Password reset instructions dispatched to ${payload.email || 'user@nexora.io'}`
          }));
        });
        return;
      }

      if (req.url === '/api/v1/auth/sso' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          let payload = { provider: 'Google', role: 'Executive' };
          try { payload = JSON.parse(body); } catch (e) {}
          res.writeHead(200);
          res.end(JSON.stringify({
            success: true,
            token: `sso_${(payload.provider || 'sso').toLowerCase()}_` + Math.random().toString(36).substring(2, 10),
            user: {
              name: `Dhanunjay Narra (${payload.provider} Verified)`,
              email: `sso-${(payload.provider || 'sso').toLowerCase()}@nexora.io`,
              role: payload.role || 'Executive',
              tenant: 'NEXORA Enterprise Global (SSO)'
            }
          }));
        });
        return;
      }

      if (req.url === '/api/v1/auth/me' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
          authenticated: true,
          user: {
            name: 'Dhanunjay Narra',
            email: 'architecture@nexora.io',
            role: 'Executive',
            tenant: 'NEXORA Enterprise Global'
          }
        }));
        return;
      }

      if (req.url === '/api/v1/workflows/trigger' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          let payload = {};
          try { payload = JSON.parse(body); } catch (e) {}
          const executionId = 'dag_exec_' + Math.random().toString(36).substring(2, 9);
          res.writeHead(200);
          res.end(JSON.stringify({
            executionId,
            status: 'COMPLETED',
            triggerSource: 'Manual UI Dispatch',
            timestamp: new Date().toISOString(),
            payload,
            nodeResults: {
              ingest: { executed: true, durationMs: 42 },
              validate: { executed: true, durationMs: 18 },
              execute: { executed: true, durationMs: 124 },
              notify: { executed: true, durationMs: 35 }
            }
          }));
        });
        return;
      }

      if (req.url?.startsWith('/api/v1/')) {
        res.writeHead(200);
        res.end(JSON.stringify({
          message: 'NEXORA Unified API Gateway Route Handled',
          path: req.url,
          timestamp: new Date().toISOString()
        }));
        return;
      }

      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Endpoint Not Found' }));
    });
  }

  public start(): Promise<void> {
    return new Promise((resolve) => {
      this.server.listen(this.port, () => {
        console.log(`⚡ NEXORA API Gateway listening on port ${this.port}`);
        resolve();
      });
    });
  }

  public stop(): Promise<void> {
    return new Promise((resolve) => {
      this.server.close(() => resolve());
    });
  }
}

if (require.main === module) {
  const gateway = new ApiGateway();
  gateway.start();
}
