export function generateFinanceInvoicesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
