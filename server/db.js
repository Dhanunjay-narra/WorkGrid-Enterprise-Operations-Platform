const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, 'nexora.sqlite');

let dbInstance = null;

function getDb() {
  if (!dbInstance) {
    dbInstance = new sqlite3.Database(DB_PATH);
  }
  return dbInstance;
}

function runCommand(sql, params = []) {
  const db = getDb();
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function queryAll(sql, params = []) {
  const db = getDb();
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows || []);
    });
  });
}

function queryOne(sql, params = []) {
  const db = getDb();
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}

async function initDatabase() {
  const db = getDb();

  // 1. Enable WAL mode for high concurrency
  await runCommand('PRAGMA journal_mode = WAL;');
  await runCommand('PRAGMA synchronous = NORMAL;');

  // 2. Create Tables
  await runCommand(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT,
      role TEXT NOT NULL DEFAULT 'Executive',
      tenant TEXT NOT NULL DEFAULT 'NEXORA Enterprise Global',
      created_at TEXT NOT NULL
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS deals (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      company TEXT NOT NULL,
      amount REAL NOT NULL DEFAULT 0,
      stage TEXT NOT NULL DEFAULT 'Proposal',
      probability INTEGER NOT NULL DEFAULT 50,
      owner TEXT NOT NULL DEFAULT 'Unassigned',
      created_at TEXT NOT NULL
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      progress INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'In Progress',
      tag TEXT NOT NULL DEFAULT 'Core',
      critical_path INTEGER NOT NULL DEFAULT 0,
      owner TEXT NOT NULL DEFAULT 'Unassigned',
      created_at TEXT NOT NULL
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS ledger (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      description TEXT NOT NULL,
      debit REAL NOT NULL DEFAULT 0,
      credit REAL NOT NULL DEFAULT 0,
      account TEXT NOT NULL,
      balanced INTEGER NOT NULL DEFAULT 1,
      created_at TEXT NOT NULL
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS inventory (
      sku TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      stock INTEGER NOT NULL DEFAULT 0,
      min_threshold INTEGER NOT NULL DEFAULT 0,
      status TEXT NOT NULL DEFAULT 'In Stock',
      unit_cost REAL NOT NULL DEFAULT 0
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS iot_telemetry (
      node_id TEXT PRIMARY KEY,
      location TEXT NOT NULL,
      temperature REAL NOT NULL,
      load_percent REAL NOT NULL,
      status TEXT NOT NULL DEFAULT 'OPTIMAL',
      latency_ms REAL NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS workflow_logs (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      domain TEXT NOT NULL,
      trigger_source TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'COMMITTED',
      steps_json TEXT NOT NULL,
      steps_executed INTEGER NOT NULL DEFAULT 0,
      duration_ms REAL NOT NULL DEFAULT 0,
      shard TEXT NOT NULL,
      timestamp TEXT NOT NULL
    );
  `);

  await runCommand(`
    CREATE TABLE IF NOT EXISTS metrics (
      id TEXT PRIMARY KEY,
      total_pipeline_value REAL NOT NULL DEFAULT 4820000,
      pipeline_growth REAL NOT NULL DEFAULT 18.4,
      active_deals_count INTEGER NOT NULL DEFAULT 42,
      workforce_headcount INTEGER NOT NULL DEFAULT 1420,
      workforce_present_percent REAL NOT NULL DEFAULT 98.2,
      active_shifts INTEGER NOT NULL DEFAULT 8,
      workflow_executions INTEGER NOT NULL DEFAULT 84912,
      workflow_sla_percent REAL NOT NULL DEFAULT 99.98,
      iot_nodes_active INTEGER NOT NULL DEFAULT 3840,
      avg_latency_ms REAL NOT NULL DEFAULT 2.4,
      updated_at TEXT NOT NULL
    );
  `);

  // 3. Seed Initial Data if Tables are Empty
  await seedInitialData();

  console.log(`[SQLITE DATABASE] Connected & Initialized at: ${DB_PATH}`);
  return true;
}

async function seedInitialData() {
  // Seed Users
  const userCount = await queryOne('SELECT COUNT(*) as count FROM users');
  if (userCount.count === 0) {
    const now = new Date().toISOString();
    const defaultUsers = [
      { id: 'USR-001', name: 'Dhanunjay Narra', email: 'architecture@nexora.io', role: 'Executive', tenant: 'NEXORA Enterprise Global', created_at: now },
      { id: 'USR-002', name: 'Sarah Jenkins', email: 'sarah.j@nexora.io', role: 'Sales', tenant: 'NEXORA Enterprise Global', created_at: now },
      { id: 'USR-003', name: 'Alex Rivera', email: 'alex.r@nexora.io', role: 'Finance', tenant: 'NEXORA Enterprise Global', created_at: now },
      { id: 'USR-004', name: 'Marcus Chen', email: 'marcus.c@nexora.io', role: 'Security', tenant: 'NEXORA Enterprise Global', created_at: now }
    ];
    for (const u of defaultUsers) {
      await runCommand(
        'INSERT INTO users (id, name, email, password, role, tenant, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [u.id, u.name, u.email, 'hashed_demo_secret', u.role, u.tenant, u.created_at]
      );
    }
  }

  // Seed Deals
  const dealCount = await queryOne('SELECT COUNT(*) as count FROM deals');
  if (dealCount.count === 0) {
    const defaultDeals = [
      { id: 'DEAL-001', name: 'Global Logistics Cloud Migration', company: 'Apex Freight Inc.', amount: 480000, stage: 'Closing', probability: 95, owner: 'Sarah Jenkins' },
      { id: 'DEAL-002', name: 'Multi-Tenant ERP Modernization', company: 'Helios Industrial', amount: 1400000, stage: 'Proposal', probability: 70, owner: 'Alex Rivera' },
      { id: 'DEAL-003', name: 'Zero-Trust IAM Platform Rollout', company: 'Vanguard Cyber', amount: 840000, stage: 'Prospecting', probability: 40, owner: 'Marcus Chen' },
      { id: 'DEAL-004', name: 'IoT Telemetry Fleet Upgrade', company: 'OmniTransit Corp', amount: 2100000, stage: 'Negotiation', probability: 85, owner: 'Elena Rostova' }
    ];
    for (const d of defaultDeals) {
      await runCommand(
        'INSERT INTO deals (id, name, company, amount, stage, probability, owner, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [d.id, d.name, d.company, d.amount, d.stage, d.probability, d.owner, new Date().toISOString()]
      );
    }
  }

  // Seed Projects
  const projectCount = await queryOne('SELECT COUNT(*) as count FROM projects');
  if (projectCount.count === 0) {
    const defaultProjects = [
      { id: 'PRJ-101', name: 'Nexus Enterprise Multi-Tenant Engine v2', progress: 88, status: 'In Progress', tag: 'Architecture', critical_path: 1, owner: 'Dhanunjay Narra' },
      { id: 'PRJ-102', name: 'Automated SAP & Salesforce Bidirectional Sync', progress: 65, status: 'Testing', tag: 'Integrations', critical_path: 0, owner: 'Integrations Team' },
      { id: 'PRJ-103', name: 'Zero-Trust Passkey & FIDO2 WebAuthn Rollout', progress: 100, status: 'Completed', tag: 'Security', critical_path: 0, owner: 'Security Ops' },
      { id: 'PRJ-104', name: 'Hyper-Scale In-Memory Cache Mesh', progress: 45, status: 'In Progress', tag: 'Infrastructure', critical_path: 1, owner: 'Cloud Mesh Team' }
    ];
    for (const p of defaultProjects) {
      await runCommand(
        'INSERT INTO projects (id, name, progress, status, tag, critical_path, owner, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [p.id, p.name, p.progress, p.status, p.tag, p.critical_path, p.owner, new Date().toISOString()]
      );
    }
  }

  // Seed Ledger
  const ledgerCount = await queryOne('SELECT COUNT(*) as count FROM ledger');
  if (ledgerCount.count === 0) {
    const today = new Date().toISOString().split('T')[0];
    const defaultLedger = [
      { id: 'TXN-901', date: today, description: 'Enterprise SaaS Annual Contract', debit: 480000, credit: 0, account: '1010-Accounts Receivable', balanced: 1 },
      { id: 'TXN-902', date: today, description: 'Cloud Infrastructure Reserved Instances', debit: 0, credit: 42000, account: '5020-Hosting & Cloud', balanced: 1 },
      { id: 'TXN-903', date: today, description: 'Payroll Bi-Weekly Disbursement', debit: 0, credit: 320000, account: '2010-Payroll Payable', balanced: 1 }
    ];
    for (const l of defaultLedger) {
      await runCommand(
        'INSERT INTO ledger (id, date, description, debit, credit, account, balanced, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [l.id, l.date, l.description, l.debit, l.credit, l.account, l.balanced, new Date().toISOString()]
      );
    }
  }

  // Seed Inventory
  const inventoryCount = await queryOne('SELECT COUNT(*) as count FROM inventory');
  if (inventoryCount.count === 0) {
    const defaultInventory = [
      { sku: 'SKU-SRV-9001', name: 'Edge AI Telemetry Gateway Node', stock: 420, min_threshold: 100, status: 'In Stock', unit_cost: 450 },
      { sku: 'SKU-SEN-4420', name: 'Industrial Optical Temperature Sensor', stock: 45, min_threshold: 50, status: 'Reorder Alert', unit_cost: 85 },
      { sku: 'SKU-CON-1002', name: 'MTLS Hardware Security Module Keycard', stock: 850, min_threshold: 200, status: 'In Stock', unit_cost: 120 }
    ];
    for (const i of defaultInventory) {
      await runCommand(
        'INSERT INTO inventory (sku, name, stock, min_threshold, status, unit_cost) VALUES (?, ?, ?, ?, ?, ?)',
        [i.sku, i.name, i.stock, i.min_threshold, i.status, i.unit_cost]
      );
    }
  }

  // Seed IoT Telemetry
  const iotCount = await queryOne('SELECT COUNT(*) as count FROM iot_telemetry');
  if (iotCount.count === 0) {
    const defaultIot = [
      { node_id: 'NODE-EU-01', location: 'Frankfurt DC 1', temperature: 42.1, load_percent: 68.4, status: 'OPTIMAL', latency_ms: 1.8 },
      { node_id: 'NODE-US-04', location: 'Virginia DC 2', temperature: 46.8, load_percent: 74.2, status: 'OPTIMAL', latency_ms: 2.1 },
      { node_id: 'NODE-AP-09', location: 'Singapore DC 3', temperature: 44.2, load_percent: 62.0, status: 'OPTIMAL', latency_ms: 3.4 }
    ];
    for (const node of defaultIot) {
      await runCommand(
        'INSERT INTO iot_telemetry (node_id, location, temperature, load_percent, status, latency_ms, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [node.node_id, node.location, node.temperature, node.load_percent, node.status, node.latency_ms, new Date().toISOString()]
      );
    }
  }

  // Seed Workflow Logs
  const workflowCount = await queryOne('SELECT COUNT(*) as count FROM workflow_logs');
  if (workflowCount.count === 0) {
    const defaultWorkflows = [
      {
        id: 'WF-8841',
        name: 'Procure-to-Pay Multi-Domain Settlement',
        domain: 'Procurement & Finance',
        trigger_source: 'AI Autonomous Swarm',
        status: 'COMMITTED',
        steps: [
          '1. Ingest Purchase Order Data',
          '2. Verify 3-Way Match with General Ledger',
          '3. Zero-Trust RBAC Multi-Sig Approval',
          '4. Balanced Double-Entry Journal Debit/Credit',
          '5. Dispatch Automated ACH Disbursement'
        ],
        steps_executed: 5,
        duration_ms: 48,
        shard: 'Shard-EU-Alpha (Frankfurt)',
        timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString()
      },
      {
        id: 'WF-8842',
        name: 'Customer Churn Mitigation & Deal Rescue',
        domain: 'CRM & Customer Support',
        trigger_source: 'Telemetry Event Stream',
        status: 'COMMITTED',
        steps: [
          '1. Ingest Telemetry Health Outlier',
          '2. Compute Churn Propensity Vector',
          '3. Auto-Assign Senior Solutions Engineer',
          '4. Generate Proactive Deal Credit Voucher'
        ],
        steps_executed: 4,
        duration_ms: 36,
        shard: 'Shard-US-East (Virginia)',
        timestamp: new Date(Date.now() - 1000 * 60 * 8).toISOString()
      },
      {
        id: 'WF-8843',
        name: 'Real-Time IoT Outlier Anomaly Quarantine',
        domain: 'IoT & Zero-Trust Security',
        trigger_source: 'Sensor Telemetry Threshold',
        status: 'COMMITTED',
        steps: [
          '1. Sensor Telemetry Spike Detected (46.8°C)',
          '2. Isolate Edge Node MTLS Certificate',
          '3. Reroute Ingest Traffic to Backup Mesh Node',
          '4. Emit OpenTelemetry Security Alert Incident'
        ],
        steps_executed: 4,
        duration_ms: 22,
        shard: 'Shard-AP-South (Singapore)',
        timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString()
      },
      {
        id: 'WF-8844',
        name: 'Automated Global Workforce Payroll Rebalance',
        domain: 'HR & Treasury Operations',
        trigger_source: 'Cron Scheduled Mesh',
        status: 'COMMITTED',
        steps: [
          '1. Audit Multi-Tenant Timesheet Aggregates',
          '2. Run Cross-Border FX Rate Lock',
          '3. Zero-Loss Dual-Key Treasury Authorization',
          '4. Commit Batch General Ledger Journal'
        ],
        steps_executed: 4,
        duration_ms: 54,
        shard: 'Shard-EU-Beta (Frankfurt)',
        timestamp: new Date(Date.now() - 1000 * 60 * 32).toISOString()
      },
      {
        id: 'WF-8845',
        name: 'Zero-Trust Passkey Key Rotation & Re-attestation',
        domain: 'Security Operations & IAM',
        trigger_source: 'Security Policy Engine',
        status: 'COMMITTED',
        steps: [
          '1. Evaluate FIDO2 Authenticator Fingerprints',
          '2. Rotate Ephemeral Hardware Token Seeds',
          '3. Update Distributed Ledger Revocation CRL',
          '4. Broadcast Cluster Security Attestation'
        ],
        steps_executed: 4,
        duration_ms: 19,
        shard: 'Shard-US-West (Oregon)',
        timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString()
      }
    ];
    for (const w of defaultWorkflows) {
      await runCommand(
        'INSERT INTO workflow_logs (id, name, domain, trigger_source, status, steps_json, steps_executed, duration_ms, shard, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [w.id, w.name, w.domain, w.trigger_source, w.status, JSON.stringify(w.steps), w.steps_executed, w.duration_ms, w.shard, w.timestamp]
      );
    }
  }

  // Seed Metrics
  const metricRow = await queryOne('SELECT * FROM metrics WHERE id = "PLATFORM_GLOBAL"');
  if (!metricRow) {
    await runCommand(`
      INSERT INTO metrics (
        id, total_pipeline_value, pipeline_growth, active_deals_count, workforce_headcount,
        workforce_present_percent, active_shifts, workflow_executions, workflow_sla_percent,
        iot_nodes_active, avg_latency_ms, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      'PLATFORM_GLOBAL', 4820000, 18.4, 42, 1420, 98.2, 8, 84912, 99.98, 3840, 2.4, new Date().toISOString()
    ]);
  }
}

module.exports = {
  getDb,
  runCommand,
  queryAll,
  queryOne,
  initDatabase,
  DB_PATH
};
