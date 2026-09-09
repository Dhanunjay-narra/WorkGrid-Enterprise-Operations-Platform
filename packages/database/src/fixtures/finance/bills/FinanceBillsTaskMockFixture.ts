export function generateFinanceBillsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
