export function generateFinanceTaxesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
