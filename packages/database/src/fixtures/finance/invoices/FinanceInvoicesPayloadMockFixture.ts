export function generateFinanceInvoicesPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
