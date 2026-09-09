export function generateProjectCapacityAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
