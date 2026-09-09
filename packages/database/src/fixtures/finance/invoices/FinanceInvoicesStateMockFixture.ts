export function generateFinanceInvoicesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
