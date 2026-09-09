export function generateFinanceInvoicesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
