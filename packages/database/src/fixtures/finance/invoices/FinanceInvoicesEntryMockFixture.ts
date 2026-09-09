export function generateFinanceInvoicesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
