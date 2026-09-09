export function generateFinPaymentTransactionSeed(tenantId: string, count: number = 5): any[] {
  const records = [];
  for (let i = 1; i <= count; i++) {
    records.push({
      id: "fin_seed_" + i,
      tenantId,
      code: "FIN-" + (1000 + i),
      name: "Enterprise FinPaymentTransaction " + i,
      status: "ACTIVE",
      createdAt: new Date().toISOString()
    });
  }
  return records;
}
