export function generateProjectKanbanReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
