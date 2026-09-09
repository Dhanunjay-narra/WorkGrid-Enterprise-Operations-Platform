export function generateFinanceTreasuryItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_treasury",
    entity: "FinanceTreasuryItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
