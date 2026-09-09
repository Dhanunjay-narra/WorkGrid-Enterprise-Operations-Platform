export function generateFinanceInvoicesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
