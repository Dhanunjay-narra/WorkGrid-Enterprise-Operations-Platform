export function generateProjectKanbanProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
