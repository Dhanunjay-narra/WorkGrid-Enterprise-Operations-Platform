export function generateFinanceBillsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
