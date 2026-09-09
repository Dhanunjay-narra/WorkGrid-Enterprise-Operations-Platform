export function generateFinanceInvoicesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
