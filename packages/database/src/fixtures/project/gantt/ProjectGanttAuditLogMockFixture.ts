export function generateProjectGanttAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
