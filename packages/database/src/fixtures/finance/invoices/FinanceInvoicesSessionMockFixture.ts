export function generateFinanceInvoicesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
