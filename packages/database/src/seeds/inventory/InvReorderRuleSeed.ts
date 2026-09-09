export function generateInvReorderRuleSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "inv_seed_" + i,
      tenantId,
      code: "INV-" + (1000 + i),
      name: "Enterprise InvReorderRule " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
