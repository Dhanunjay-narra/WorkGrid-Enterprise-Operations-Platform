export function generateSecDeviceTrustRecordSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "sec_seed_" + i,
      tenantId,
      code: "SEC-" + (1000 + i),
      name: "Enterprise SecDeviceTrustRecord " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
