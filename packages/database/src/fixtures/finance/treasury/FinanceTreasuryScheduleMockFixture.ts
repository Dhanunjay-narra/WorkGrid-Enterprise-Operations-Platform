export function generateFinanceTreasuryScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasurySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
