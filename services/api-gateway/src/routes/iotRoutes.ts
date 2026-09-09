import { Router } from 'express';

export function createIotRouter(): Router {
  const router = Router();

  router.get('/health', (req, res) => {
    res.json({ service: 'iot', status: 'OPERATIONAL', timestamp: new Date().toISOString() });
  });

  router.get('/v1/iot/items', (req, res) => {
    const tenantId = req.header('X-Tenant-ID') || 'default-tenant';
    res.json({
      domain: 'iot',
      tenantId,
      data: [],
      pagination: { page: 1, limit: 20, total: 0 }
    });
  });

  router.post('/v1/iot/action', (req, res) => {
    const payload = req.body || {};
    res.status(201).json({
      domain: 'iot',
      status: 'PROCESSED',
      actionId: 'act_' + Math.random().toString(36).substring(2, 9),
      receivedPayload: payload
    });
  });

  return router;
}
