export function generateFinanceBillsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_bills",
    entity: "FinanceBillsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
