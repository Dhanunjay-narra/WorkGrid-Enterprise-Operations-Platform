export function generateProjectKanbanSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
