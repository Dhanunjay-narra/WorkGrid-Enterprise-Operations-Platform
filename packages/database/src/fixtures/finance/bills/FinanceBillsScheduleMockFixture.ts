export function generateFinanceBillsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
