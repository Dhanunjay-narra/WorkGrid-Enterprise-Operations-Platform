export function generateDocStorageBucketSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "doc_seed_" + i,
      tenantId,
      code: "DOC-" + (1000 + i),
      name: "Enterprise DocStorageBucket " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
