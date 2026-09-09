export function generateIntConnectorConfigSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "int_seed_" + i,
      tenantId,
      code: "INT-" + (1000 + i),
      name: "Enterprise IntConnectorConfig " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
