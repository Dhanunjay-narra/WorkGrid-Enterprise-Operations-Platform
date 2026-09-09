export function generateCrmPipelineSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "crm_seed_" + i,
      tenantId,
      code: "CRM-" + (1000 + i),
      name: "Enterprise CrmPipeline " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
