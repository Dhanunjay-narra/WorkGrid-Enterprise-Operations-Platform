export function generateProjectKanbanAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
