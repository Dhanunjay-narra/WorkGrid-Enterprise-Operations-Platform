export function generateSupTicketTagSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "sup_seed_" + i,
      tenantId,
      code: "SUP-" + (1000 + i),
      name: "Enterprise SupTicketTag " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
