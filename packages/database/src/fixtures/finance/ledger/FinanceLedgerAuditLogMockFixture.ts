export function generateFinanceLedgerAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "finance_ledger",
    entity: "FinanceLedgerAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
