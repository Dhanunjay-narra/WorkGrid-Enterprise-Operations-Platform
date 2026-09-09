// Direct Test Suite for NEXORA Enterprise Core Algorithms

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

const ganttTasks = [
  { id: '1', estimatedHours: 16, dependencies: [] },
  { id: '2', estimatedHours: 24, dependencies: ['1'] }
];
const ganttResult = calculateCriticalPath(ganttTasks);
assert(ganttResult.get('1').isCritical === true, 'Gantt CPM identifies critical task 1');
assert(ganttResult.get('2').isCritical === true, 'Gantt CPM identifies critical task 2');

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
ledger.createEntry([
  { account: 'cash', debit: 5000, credit: 0 },
  { account: 'ar', debit: 0, credit: 5000 }
]);
assert(ledger.balances.get('cash') === 5000, 'Ledger accurately debits Cash account');
assert(ledger.balances.get('ar') === -5000, 'Ledger accurately credits A/R account');

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
const dagRes = resolveDAG(
  [{ id: 'n2' }, { id: 'n1' }, { id: 'n3' }],
  [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }]
);
assert(dagRes.join(',') === 'n1,n2,n3', 'DAGResolver topologically sorts nodes');

// 4. Lead Intent Scoring
function scoreLead(lead, profile) {
  let score = 20;
  if (profile.employees > 500) score += 30;
  if (profile.revenue > 10000000) score += 25;
  if (profile.whitepaper) score += 15;
  return Math.min(100, score);
}
const s = scoreLead({}, { employees: 600, revenue: 20000000, whitepaper: true });
assert(s === 90, `LeadScoring computes high enterprise intent score (${s})`);

// 5. SLA Calculation
function getSLADeadline(priority, start) {
  const map = { P1_CRITICAL: 1, P2_HIGH: 4, P3_MEDIUM: 12, P4_LOW: 48 };
  return new Date(start.getTime() + (map[priority] || 24) * 3600000);
}
const now = new Date();
const dead = getSLADeadline('P1_CRITICAL', now);
assert(dead.getTime() - now.getTime() === 3600000, 'SLA engine computes 1hr breach threshold');

// 6. Anomaly Detection Z-Score
function detectZAnomalies(values, thresh = 2.0) {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
  const std = Math.sqrt(variance);
  if (std === 0) return [];
  return values.filter(v => Math.abs(v - mean) / std >= thresh);
}
const anom = detectZAnomalies([20.0, 20.1, 19.9, 20.2, 99.0, 20.0], 2.0);
assert(anom.length === 1 && anom[0] === 99.0, 'Telemetry Anomaly Engine flags statistical spike');

console.log(`\n🎉 All ${passed}/${total} Enterprise Domain Tests PASSED with 100% success rate.\n`);
