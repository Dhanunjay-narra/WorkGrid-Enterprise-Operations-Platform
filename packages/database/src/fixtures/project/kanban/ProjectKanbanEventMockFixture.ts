export function generateProjectKanbanEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
