export function generateCrmTerritoryAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "crm_territory",
    entity: "CrmTerritoryAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
