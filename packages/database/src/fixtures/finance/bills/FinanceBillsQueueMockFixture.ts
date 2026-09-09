export function generateFinanceBillsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
