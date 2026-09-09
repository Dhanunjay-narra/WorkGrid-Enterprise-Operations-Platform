export function generateFinanceTaxesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
