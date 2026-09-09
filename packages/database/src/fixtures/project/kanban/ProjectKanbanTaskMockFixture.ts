export function generateProjectKanbanTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
