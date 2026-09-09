export function generateFinanceInvoicesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
