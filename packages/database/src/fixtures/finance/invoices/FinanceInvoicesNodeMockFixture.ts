export function generateFinanceInvoicesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
