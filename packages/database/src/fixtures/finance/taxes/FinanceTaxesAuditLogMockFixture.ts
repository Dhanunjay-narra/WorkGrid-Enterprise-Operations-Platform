export function generateFinanceTaxesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_taxes",
    entity: "FinanceTaxesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
