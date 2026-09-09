export function generateFinanceInvoicesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
