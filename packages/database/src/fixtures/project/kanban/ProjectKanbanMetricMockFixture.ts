export function generateProjectKanbanMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
