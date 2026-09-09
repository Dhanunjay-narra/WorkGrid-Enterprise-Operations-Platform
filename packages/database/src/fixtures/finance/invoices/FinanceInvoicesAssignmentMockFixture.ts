export function generateFinanceInvoicesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
