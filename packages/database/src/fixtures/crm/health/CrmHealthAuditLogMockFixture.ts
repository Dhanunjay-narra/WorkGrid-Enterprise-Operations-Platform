export function generateCrmHealthAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_health",
    entity: "CrmHealthAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
