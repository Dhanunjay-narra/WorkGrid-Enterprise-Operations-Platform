export function generateFinanceInvoicesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_invoices",
    entity: "FinanceInvoicesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
