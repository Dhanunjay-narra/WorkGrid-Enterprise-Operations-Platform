export function generateFinanceInvoicesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
