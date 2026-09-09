export function generateProjectGanttMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
