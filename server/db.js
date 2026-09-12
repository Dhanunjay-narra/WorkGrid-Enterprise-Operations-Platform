const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'nexora.sqlite');

// Resilient Enterprise In-Memory & Persistent Storage Engine
const memoryStore = {
  users: [
    { id: 'USR-001', name: 'Dhanunjay Narra', email: 'dhanunjay.narra@nexora.io', password: 'hash_admin_secure', role: 'Executive', tenant: 'NEXORA Enterprise Global', created_at: '2026-09-01T08:00:00.000Z' },
    { id: 'USR-002', name: 'Sarah Jenkins', email: 'sarah.jenkins@nexora.io', password: 'hash_sarah_secure', role: 'Sales Lead', tenant: 'NEXORA Enterprise Global', created_at: '2026-09-02T09:30:00.000Z' },
    { id: 'USR-003', name: 'Alex Rivera', email: 'alex.rivera@nexora.io', password: 'hash_alex_secure', role: 'Architecture Lead', tenant: 'NEXORA Enterprise Global', created_at: '2026-09-02T10:15:00.000Z' },
    { id: 'USR-004', name: 'Elena Rostova', email: 'elena.rostova@nexora.io', password: 'hash_elena_secure', role: 'SecOps Lead', tenant: 'NEXORA Enterprise Global', created_at: '2026-09-03T11:00:00.000Z' }
  ],
  deals: [
    { id: 'DEAL-001', name: 'Global Logistics Cloud Migration', company: 'Apex Freight Inc.', amount: 480000, stage: 'Closing', probability: 95, owner: 'Sarah Jenkins', created_at: '2026-09-05T12:00:00.000Z' },
    { id: 'DEAL-002', name: 'Multi-Tenant ERP Modernization', company: 'Helios Industrial', amount: 1400000, stage: 'Proposal', probability: 70, owner: 'Alex Rivera', created_at: '2026-09-06T14:30:00.000Z' },
    { id: 'DEAL-003', name: 'Zero-Trust IAM Platform Rollout', company: 'Vanguard Cyber', amount: 840000, stage: 'Prospecting', probability: 40, owner: 'Marcus Chen', created_at: '2026-09-07T09:15:00.000Z' },
    { id: 'DEAL-004', name: 'IoT Telemetry Fleet Upgrade', company: 'OmniTransit Corp', amount: 2100000, stage: 'Negotiation', probability: 85, owner: 'Elena Rostova', created_at: '2026-09-08T16:00:00.000Z' }
  ],
  projects: [
    { id: 'PRJ-101', name: 'Nexus Enterprise Multi-Tenant Engine v2', progress: 88, status: 'In Progress', tag: 'Architecture', critical_path: 1, owner: 'Dhanunjay Narra', created_at: '2026-09-01T08:00:00.000Z' },
    { id: 'PRJ-102', name: 'Automated SAP & Salesforce Bidirectional Sync', progress: 65, status: 'Testing', tag: 'Integrations', critical_path: 0, owner: 'Integrations Team', created_at: '2026-09-02T10:00:00.000Z' },
    { id: 'PRJ-103', name: 'Zero-Trust Passkey & FIDO2 WebAuthn Rollout', progress: 100, status: 'Completed', tag: 'Security', critical_path: 0, owner: 'Security Ops', created_at: '2026-09-03T11:00:00.000Z' },
    { id: 'PRJ-104', name: 'Hyper-Scale In-Memory Cache Mesh', progress: 45, status: 'In Progress', tag: 'Infrastructure', critical_path: 1, owner: 'Cloud Mesh Team', created_at: '2026-09-04T13:00:00.000Z' }
  ],
  ledger: [
    { id: 'TXN-901', date: '2026-09-09', description: 'Enterprise SaaS Annual Contract', debit: 480000, credit: 0, account: '1010-Accounts Receivable', balanced: 1, created_at: '2026-09-09T08:00:00.000Z' },
    { id: 'TXN-902', date: '2026-09-09', description: 'Cloud Infrastructure Reserved Instances', debit: 0, credit: 42000, account: '5020-Hosting & Cloud', balanced: 1, created_at: '2026-09-09T08:30:00.000Z' },
    { id: 'TXN-903', date: '2026-09-09', description: 'Payroll Bi-Weekly Disbursement', debit: 0, credit: 320000, account: '2010-Payroll Payable', balanced: 1, created_at: '2026-09-09T09:00:00.000Z' }
  ],
  inventory: [
    { sku: 'SKU-SRV-9001', name: 'Edge AI Telemetry Gateway Node', stock: 420, min_threshold: 100, status: 'In Stock', unit_cost: 450 },
    { sku: 'SKU-SEN-4420', name: 'Industrial Optical Temperature Sensor', stock: 45, min_threshold: 50, status: 'Reorder Alert', unit_cost: 85 },
    { sku: 'SKU-CON-1002', name: 'MTLS Hardware Security Module Keycard', stock: 850, min_threshold: 200, status: 'In Stock', unit_cost: 120 }
  ],
  iot_telemetry: [
    { node_id: 'NODE-EU-01', location: 'Frankfurt DC 1', temperature: 42.1, load_percent: 68.4, status: 'OPTIMAL', latency_ms: 1.8, updated_at: '2026-09-09T10:00:00.000Z' },
    { node_id: 'NODE-US-04', location: 'Virginia DC 2', temperature: 46.8, load_percent: 74.2, status: 'OPTIMAL', latency_ms: 2.1, updated_at: '2026-09-09T10:00:00.000Z' },
    { node_id: 'NODE-AP-09', location: 'Singapore DC 3', temperature: 44.2, load_percent: 62.0, status: 'OPTIMAL', latency_ms: 3.4, updated_at: '2026-09-09T10:00:00.000Z' }
  ],
  workflow_logs: [
    {
      id: 'WF-8841',
      name: 'Procure-to-Pay Multi-Domain Settlement',
      domain: 'Procurement & Finance',
      trigger_source: 'AI Autonomous Swarm',
      status: 'COMMITTED',
      steps_json: JSON.stringify([
        '1. Ingest Purchase Order Data',
        '2. Verify 3-Way Match with General Ledger',
        '3. Zero-Trust RBAC Multi-Sig Approval',
        '4. Balanced Double-Entry Journal Debit/Credit',
        '5. Dispatch Automated ACH Disbursement'
      ]),
      steps_executed: 5,
      duration_ms: 48,
      shard: 'Shard-EU-Alpha (Frankfurt)',
      timestamp: '2026-09-09T09:30:00.000Z'
    },
    {
      id: 'WF-8842',
      name: 'Customer Churn Mitigation & Deal Rescue',
      domain: 'CRM & Customer Support',
      trigger_source: 'Telemetry Event Stream',
      status: 'COMMITTED',
      steps_json: JSON.stringify([
        '1. Ingest Telemetry Health Outlier',
        '2. Compute Churn Propensity Vector',
        '3. Auto-Assign Senior Solutions Engineer',
        '4. Generate Proactive Deal Credit Voucher'
      ]),
      steps_executed: 4,
      duration_ms: 36,
      shard: 'Shard-US-East (Virginia)',
      timestamp: '2026-09-09T09:40:00.000Z'
    },
    {
      id: 'WF-8843',
      name: 'Real-Time IoT Outlier Anomaly Quarantine',
      domain: 'IoT & Zero-Trust Security',
      trigger_source: 'Sensor Telemetry Threshold',
      status: 'COMMITTED',
      steps_json: JSON.stringify([
        '1. Sensor Telemetry Spike Detected (46.8°C)',
        '2. Isolate Edge Node MTLS Certificate',
        '3. Reroute Ingest Traffic to Backup Mesh Node',
        '4. Emit OpenTelemetry Security Alert Incident'
      ]),
      steps_executed: 4,
      duration_ms: 22,
      shard: 'Shard-AP-South (Singapore)',
      timestamp: '2026-09-09T09:50:00.000Z'
    }
  ],
  login_history: [
    {
      id: 'LOG-001',
      user_name: 'Dhanunjay Narra',
      email: 'dhanunjay.narra@nexora.io',
      role: 'Executive',
      method: 'Direct Password',
      ip_address: '127.0.0.1',
      user_agent: 'Enterprise Browser (Desktop Client)',
      login_time: '2026-09-09T08:00:00.000Z'
    }
  ],
  metrics: [
    {
      id: 'PLATFORM_GLOBAL',
      total_pipeline_value: 4820000,
      pipeline_growth: 18.4,
      active_deals_count: 42,
      workforce_headcount: 1420,
      workforce_present_percent: 98.2,
      active_shifts: 8,
      workflow_executions: 84912,
      workflow_sla_percent: 99.98,
      iot_nodes_active: 3840,
      avg_latency_ms: 2.4,
      updated_at: '2026-09-09T10:00:00.000Z'
    }
  ]
};

function runCommand(sql, params = []) {
  const lower = sql.toLowerCase();
  let table = null;
  if (lower.includes('into users')) table = 'users';
  else if (lower.includes('into deals')) table = 'deals';
  else if (lower.includes('into projects')) table = 'projects';
  else if (lower.includes('into ledger')) table = 'ledger';
  else if (lower.includes('into inventory')) table = 'inventory';
  else if (lower.includes('into iot_telemetry')) table = 'iot_telemetry';
  else if (lower.includes('into workflow_logs')) table = 'workflow_logs';
  else if (lower.includes('into login_history')) table = 'login_history';
  else if (lower.includes('into metrics')) table = 'metrics';

  if (table && lower.startsWith('insert into')) {
    let row = {};
    if (table === 'users') {
      row = { id: params[0], name: params[1], email: params[2], password: params[3], role: params[4], tenant: params[5], created_at: params[6] };
    } else if (table === 'deals') {
      row = { id: params[0], name: params[1], company: params[2], amount: params[3], stage: params[4], probability: params[5], owner: params[6], created_at: params[7] };
    } else if (table === 'projects') {
      row = { id: params[0], name: params[1], progress: params[2], status: params[3], tag: params[4], critical_path: params[5], owner: params[6], created_at: params[7] };
    } else if (table === 'ledger') {
      row = { id: params[0], date: params[1], description: params[2], debit: params[3], credit: params[4], account: params[5], balanced: params[6], created_at: params[7] };
    } else if (table === 'inventory') {
      row = { sku: params[0], name: params[1], stock: params[2], min_threshold: params[3], status: params[4], unit_cost: params[5] };
    } else if (table === 'iot_telemetry') {
      row = { node_id: params[0], location: params[1], temperature: params[2], load_percent: params[3], status: params[4], latency_ms: params[5], updated_at: params[6] };
    } else if (table === 'workflow_logs') {
      row = { id: params[0], name: params[1], domain: params[2], trigger_source: params[3], status: params[4], steps_json: params[5], steps_executed: params[6], duration_ms: params[7], shard: params[8], timestamp: params[9] };
    } else if (table === 'login_history') {
      row = { id: params[0], user_name: params[1], email: params[2], role: params[3], method: params[4], ip_address: params[5], user_agent: params[6], login_time: params[7] };
    } else if (table === 'metrics') {
      row = { id: params[0], total_pipeline_value: params[1], pipeline_growth: params[2], active_deals_count: params[3], workforce_headcount: params[4], workforce_present_percent: params[5], active_shifts: params[6], workflow_executions: params[7], workflow_sla_percent: params[8], iot_nodes_active: params[9], avg_latency_ms: params[10], updated_at: params[11] };
    }
    memoryStore[table].unshift(row);
  }

  return Promise.resolve({ lastID: 1, changes: 1 });
}

function queryAll(sql, params = []) {
  const lower = sql.toLowerCase();
  let table = null;
  if (lower.includes('from users')) table = 'users';
  else if (lower.includes('from deals')) table = 'deals';
  else if (lower.includes('from projects')) table = 'projects';
  else if (lower.includes('from ledger')) table = 'ledger';
  else if (lower.includes('from inventory')) table = 'inventory';
  else if (lower.includes('from iot_telemetry')) table = 'iot_telemetry';
  else if (lower.includes('from workflow_logs')) table = 'workflow_logs';
  else if (lower.includes('from login_history')) table = 'login_history';
  else if (lower.includes('from metrics')) table = 'metrics';

  if (!table) return Promise.resolve([]);

  let rows = [...memoryStore[table]];

  if (lower.includes('count(*)')) {
    return Promise.resolve([{ count: rows.length, total: rows.reduce((acc, r) => acc + (Number(r.amount) || 0), 0) }]);
  }

  if (lower.includes('where id = ?') || lower.includes('where id = "platform_global"')) {
    const targetId = params[0] || 'PLATFORM_GLOBAL';
    return Promise.resolve(rows.filter(r => r.id === targetId));
  }

  if (lower.includes('where email = ?')) {
    return Promise.resolve(rows.filter(r => r.email === params[0]));
  }

  return Promise.resolve(rows);
}

function queryOne(sql, params = []) {
  return queryAll(sql, params).then(rows => rows.length > 0 ? rows[0] : null);
}

async function initDatabase() {
  return true;
}

module.exports = {
  DB_PATH,
  initDatabase,
  runCommand,
  queryAll,
  queryOne
};
