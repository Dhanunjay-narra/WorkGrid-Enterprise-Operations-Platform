export function generateFinanceInvoicesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
