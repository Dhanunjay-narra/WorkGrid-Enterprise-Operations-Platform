export function generateProjectSprintsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
