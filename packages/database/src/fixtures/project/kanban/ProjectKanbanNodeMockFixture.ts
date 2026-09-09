export function generateProjectKanbanNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
