export function generateFinanceInvoicesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
