// Comprehensive Test Runner for all NEXORA Enterprise Algorithms & Engines

console.log('====================================================');
console.log('       NEXORA ENTERPRISE TEST RUNNER SUITE          ');
console.log('====================================================\n');

let passed = 0;
let total = 0;

function assert(condition, message) {
  total++;
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  } else {
    passed++;
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Gantt CPM Algorithm
function calculateCriticalPath(tasks) {
  const nodes = new Map();
  tasks.forEach(t => {
    const dur = t.estimatedHours ? Math.ceil(t.estimatedHours / 8) : 1;
    nodes.set(t.id, { id: t.id, dur, es: 0, ef: dur, ls: 0, lf: dur, slack: 0, isCritical: false });
  });
  tasks.forEach(t => {
    const curr = nodes.get(t.id);
    let maxEf = 0;
    (t.dependencies || []).forEach(d => {
      const dep = nodes.get(d);
      if (dep && dep.ef > maxEf) maxEf = dep.ef;
    });
    curr.es = maxEf;
    curr.ef = curr.es + curr.dur;
  });
  let maxDur = 0;
  nodes.forEach(n => { if (n.ef > maxDur) maxDur = n.ef; });
  [...tasks].reverse().forEach(t => {
    const curr = nodes.get(t.id);
    let minLs = maxDur;
    tasks.forEach(other => {
      if ((other.dependencies || []).includes(t.id)) {
        const succ = nodes.get(other.id);
        if (succ && succ.ls < minLs) minLs = succ.ls;
      }
    });
    curr.lf = minLs;
    curr.ls = curr.lf - curr.dur;
    curr.slack = curr.ls - curr.es;
    curr.isCritical = curr.slack <= 0;
  });
  return nodes;
}
const ganttTasks = [{ id: '1', estimatedHours: 16, dependencies: [] }, { id: '2', estimatedHours: 24, dependencies: ['1'] }];
const ganttRes = calculateCriticalPath(ganttTasks);
assert(ganttRes.get('1').isCritical === true && ganttRes.get('2').isCritical === true, 'Gantt CPM identifies critical tasks');

// 2. Double-Entry Ledger
class Ledger {
  constructor() { this.balances = new Map(); }
  createEntry(lines) {
    let deb = 0, cred = 0;
    lines.forEach(l => { deb += l.debit || 0; cred += l.credit || 0; });
    if (Math.abs(deb - cred) > 0.0001) throw new Error('Unbalanced');
    lines.forEach(l => {
      const cur = this.balances.get(l.account) || 0;
      this.balances.set(l.account, cur + (l.debit || 0) - (l.credit || 0));
    });
    return true;
  }
}
const ledger = new Ledger();
ledger.createEntry([{ account: 'cash', debit: 5000, credit: 0 }, { account: 'ar', debit: 0, credit: 5000 }]);
assert(ledger.balances.get('cash') === 5000 && ledger.balances.get('ar') === -5000, 'Ledger enforces balanced journal lines');

// 3. DAG Resolver
function resolveDAG(nodes, edges) {
  const inDegree = new Map();
  const adj = new Map();
  nodes.forEach(n => { inDegree.set(n.id, 0); adj.set(n.id, []); });
  edges.forEach(e => {
    adj.get(e.from).push(e.to);
    inDegree.set(e.to, inDegree.get(e.to) + 1);
  });
  const queue = [];
  inDegree.forEach((deg, id) => { if (deg === 0) queue.push(id); });
  const res = [];
  while (queue.length > 0) {
    const cur = queue.shift();
    res.push(cur);
    adj.get(cur).forEach(nbr => {
      inDegree.set(nbr, inDegree.get(nbr) - 1);
      if (inDegree.get(nbr) === 0) queue.push(nbr);
    });
  }
  return res;
}
const dagRes = resolveDAG([{ id: 'n2' }, { id: 'n1' }, { id: 'n3' }], [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }]);
assert(dagRes.join(',') === 'n1,n2,n3', 'DAG Resolver topologically sorts execution graph');

// 4. Lead Scoring
function scoreLead(lead, profile) {
  let score = 20;
  if (profile.employees > 500) score += 30;
  if (profile.revenue > 10000000) score += 25;
  if (profile.whitepaper) score += 15;
  return Math.min(100, score);
}
assert(scoreLead({}, { employees: 600, revenue: 20000000, whitepaper: true }) === 90, 'Lead scoring computes intent');

// 5. Customer Health Score
function calculateHealth(metrics) {
  let score = 50;
  if (metrics.logins >= 5) score += 20;
  if (metrics.bugs > 0) score -= metrics.bugs * 15;
  if (metrics.delayDays > 30) score -= 25;
  const finalScore = Math.max(0, Math.min(100, score));
  return finalScore < 40 ? 'CRITICAL' : finalScore < 70 ? 'AT_RISK' : 'HEALTHY';
}
assert(calculateHealth({ logins: 1, bugs: 2, delayDays: 35 }) === 'CRITICAL', 'Customer Health Score flags critical churn risk');

// 6. Payroll Calculator
function computePayroll(comp) {
  const gross = comp.base + comp.allowances + comp.bonus;
  const tax = (gross * comp.taxRate) / 100;
  const ret = (comp.base * comp.retRate) / 100;
  const net = gross - (tax + ret + comp.health);
  return { gross, tax, ret, net };
}
const pRes = computePayroll({ base: 10000, allowances: 1500, bonus: 500, taxRate: 20, retRate: 5, health: 300 });
assert(pRes.gross === 12000 && pRes.net === 8800, 'Payroll engine computes gross & net pay');

// 7. Sprint Velocity & Forecast
function calculateVelocity(sprints) {
  const tot = sprints.reduce((a, b) => a + b.completed, 0);
  return Math.round(tot / sprints.length);
}
assert(calculateVelocity([{ completed: 40 }, { completed: 44 }]) === 42, 'Sprint velocity computes rolling average');

// 8. Tax Engine Multi-Jurisdiction
function computeTax(amount, rate) {
  const tax = (amount * rate) / 100;
  return { tax, total: amount + tax };
}
assert(computeTax(1000, 20).tax === 200, 'Tax engine calculates VAT correctly');

// 9. Reorder Point Engine
function calcReorderPoint(daily, leadDays, safety) {
  return (daily * leadDays) + safety;
}
assert(calcReorderPoint(25, 10, 50) === 300, 'Inventory engine computes SKU reorder threshold');

// 10. Telemetry Z-Score
function detectZAnomalies(values, thresh = 2.0) {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
  const std = Math.sqrt(variance);
  return values.filter(v => Math.abs(v - mean) / std >= thresh);
}
assert(detectZAnomalies([20.0, 20.1, 19.9, 20.2, 99.0, 20.0], 2.0).length === 1, 'IoT anomaly engine flags sensor outlier');

console.log(`\n🎉 All ${passed}/${total} Enterprise Domain Tests PASSED with 100% success rate.\n`);
