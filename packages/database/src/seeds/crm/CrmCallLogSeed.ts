export function generateCrmCallLogSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "crm_seed_" + i,
      tenantId,
      code: "CRM-" + (1000 + i),
      name: "Enterprise CrmCallLog " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
