export function generateProjectKanbanSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
