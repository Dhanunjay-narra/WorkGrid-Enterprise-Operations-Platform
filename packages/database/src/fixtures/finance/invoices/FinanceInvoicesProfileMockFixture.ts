export function generateFinanceInvoicesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
