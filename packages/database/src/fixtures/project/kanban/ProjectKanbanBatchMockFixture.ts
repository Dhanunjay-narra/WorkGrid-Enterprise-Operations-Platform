export function generateProjectKanbanBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
