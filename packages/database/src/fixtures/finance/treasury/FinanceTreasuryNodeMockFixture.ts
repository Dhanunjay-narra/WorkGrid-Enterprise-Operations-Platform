export function generateFinanceTreasuryNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
