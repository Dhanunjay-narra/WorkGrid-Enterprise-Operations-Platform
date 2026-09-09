export function generateEvtEventBatchSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "eve_seed_" + i,
      tenantId,
      code: "EVT-" + (1000 + i),
      name: "Enterprise EvtEventBatch " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
