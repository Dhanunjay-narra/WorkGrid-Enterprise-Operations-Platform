export function generateBiDashboardSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "ana_seed_" + i,
      tenantId,
      code: "BI-" + (1000 + i),
      name: "Enterprise BiDashboard " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
