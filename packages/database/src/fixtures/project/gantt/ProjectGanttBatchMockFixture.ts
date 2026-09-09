export function generateProjectGanttBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
