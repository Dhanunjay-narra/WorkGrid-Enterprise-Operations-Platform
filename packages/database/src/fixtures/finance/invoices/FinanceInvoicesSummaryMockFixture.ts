export function generateFinanceInvoicesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
