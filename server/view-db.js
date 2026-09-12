const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, 'nexora.sqlite');
const db = new sqlite3.Database(DB_PATH);

function query(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows || []);
    });
  });
}

async function viewDatabase() {
  console.log('\n================================================================');
  console.log('🗄️  NEXORA SQLITE DATABASE INSPECTOR');
  console.log('📁  File Path:', DB_PATH);
  console.log('================================================================\n');

  try {
    // 1. Users
    console.log('📌 1. USERS TABLE (👥 Login Accounts):');
    const users = await query('SELECT id, name, email, role, tenant, created_at FROM users');
    console.table(users);

    // 2. Deals
    console.log('\n📌 2. DEALS TABLE (💼 CRM Pipeline Opportunities):');
    const deals = await query('SELECT id, name, company, amount, stage, probability, owner FROM deals');
    console.table(deals);

    // 3. Projects
    console.log('\n📌 3. PROJECTS TABLE (🎯 Enterprise Projects & CPM):');
    const projects = await query('SELECT id, name, progress, status, tag, critical_path, owner FROM projects');
    console.table(projects);

    // 4. Ledger
    console.log('\n📌 4. LEDGER TABLE (💳 Finance Double-Entry Transactions):');
    const ledger = await query('SELECT id, date, description, debit, credit, account FROM ledger');
    console.table(ledger);

    // 5. Inventory
    console.log('\n📌 5. INVENTORY TABLE (📦 Supply Chain SKUs):');
    const inventory = await query('SELECT sku, name, stock, min_threshold, status, unit_cost FROM inventory');
    console.table(inventory);

    // 6. Workflow Logs
    console.log('\n📌 6. WORKFLOW LOGS TABLE (⚡ Distributed DAG Runs):');
    const workflows = await query('SELECT id, name, domain, trigger_source, status, steps_executed, duration_ms, shard FROM workflow_logs ORDER BY rowid DESC LIMIT 5');
    console.table(workflows);

    // 7. IoT Telemetry
    console.log('\n📌 7. IOT TELEMETRY TABLE (📡 Edge Sensor Nodes):');
    const iot = await query('SELECT node_id, location, temperature, load_percent, status, latency_ms FROM iot_telemetry');
    console.table(iot);

    console.log('\n================================================================');
    console.log('✅ ALL TABLES LOADED DIRECTLY FROM SQLITE FILE ON DISK!');
    console.log('================================================================\n');
  } catch (err) {
    console.error('Database inspection error:', err.message);
  } finally {
    db.close();
  }
}

viewDatabase();
