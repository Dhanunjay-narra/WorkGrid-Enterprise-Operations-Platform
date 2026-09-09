export function generateFinanceInvoicesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
