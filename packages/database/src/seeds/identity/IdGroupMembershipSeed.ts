export function generateIdGroupMembershipSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "ide_seed_" + i,
      tenantId,
      code: "ID-" + (1000 + i),
      name: "Enterprise IdGroupMembership " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
