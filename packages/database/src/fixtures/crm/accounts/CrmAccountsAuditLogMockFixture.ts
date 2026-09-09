export function generateCrmAccountsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_accounts",
    entity: "CrmAccountsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
