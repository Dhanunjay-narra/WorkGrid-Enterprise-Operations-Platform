export function generateFinanceInvoicesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
