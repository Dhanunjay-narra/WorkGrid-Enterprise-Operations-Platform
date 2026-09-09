export function generateCrmDealsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_deals",
    entity: "CrmDealsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
