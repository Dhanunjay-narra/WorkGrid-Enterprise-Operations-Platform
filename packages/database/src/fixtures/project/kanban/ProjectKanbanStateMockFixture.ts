export function generateProjectKanbanStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
