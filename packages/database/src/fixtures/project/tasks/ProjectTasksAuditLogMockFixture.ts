export function generateProjectTasksAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
