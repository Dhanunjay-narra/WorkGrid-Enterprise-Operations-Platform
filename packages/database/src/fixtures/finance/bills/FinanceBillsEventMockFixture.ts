export function generateFinanceBillsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
