export function generateFinanceInvoicesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
