export function generateFinanceTreasurySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasurySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
