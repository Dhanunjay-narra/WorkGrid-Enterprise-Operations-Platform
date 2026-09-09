export function generateTenancyAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
