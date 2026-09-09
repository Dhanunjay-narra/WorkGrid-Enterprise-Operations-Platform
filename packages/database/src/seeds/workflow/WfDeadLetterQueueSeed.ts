export function generateWfDeadLetterQueueSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "wor_seed_" + i,
      tenantId,
      code: "WF-" + (1000 + i),
      name: "Enterprise WfDeadLetterQueue " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
