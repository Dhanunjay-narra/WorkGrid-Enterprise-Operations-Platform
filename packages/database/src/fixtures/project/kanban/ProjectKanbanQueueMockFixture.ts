export function generateProjectKanbanQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
