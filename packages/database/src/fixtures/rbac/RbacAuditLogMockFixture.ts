export function generateRbacAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
