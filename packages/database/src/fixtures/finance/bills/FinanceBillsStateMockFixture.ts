export function generateFinanceBillsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
