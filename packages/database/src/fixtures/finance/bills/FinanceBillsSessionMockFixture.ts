export function generateFinanceBillsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
