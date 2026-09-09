export function generateHrCandidateSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "hr_seed_" + i,
      tenantId,
      code: "HR-" + (1000 + i),
      name: "Enterprise HrCandidate " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
