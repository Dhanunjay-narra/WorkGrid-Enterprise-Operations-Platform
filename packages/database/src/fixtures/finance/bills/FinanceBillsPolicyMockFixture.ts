export function generateFinanceBillsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
