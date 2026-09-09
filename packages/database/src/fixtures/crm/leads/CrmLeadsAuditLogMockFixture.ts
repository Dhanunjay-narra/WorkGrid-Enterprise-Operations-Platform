export function generateCrmLeadsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_leads",
    entity: "CrmLeadsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
