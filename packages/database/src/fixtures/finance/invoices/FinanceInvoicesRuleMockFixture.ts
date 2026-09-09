export function generateFinanceInvoicesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
