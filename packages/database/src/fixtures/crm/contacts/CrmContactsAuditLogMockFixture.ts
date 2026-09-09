export function generateCrmContactsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_contacts",
    entity: "CrmContactsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
