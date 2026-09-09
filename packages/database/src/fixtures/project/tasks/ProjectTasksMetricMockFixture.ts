export function generateProjectTasksMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
