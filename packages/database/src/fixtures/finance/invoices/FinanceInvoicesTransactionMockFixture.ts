export function generateFinanceInvoicesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
