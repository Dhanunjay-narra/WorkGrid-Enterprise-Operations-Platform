export function generateFinanceInvoicesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
