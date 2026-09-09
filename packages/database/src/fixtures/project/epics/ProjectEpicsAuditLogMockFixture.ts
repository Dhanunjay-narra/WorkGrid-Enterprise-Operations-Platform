export function generateProjectEpicsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
