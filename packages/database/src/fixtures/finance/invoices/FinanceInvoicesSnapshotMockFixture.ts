export function generateFinanceInvoicesSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
