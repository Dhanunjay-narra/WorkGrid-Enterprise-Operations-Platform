export function generateProjectKanbanItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
