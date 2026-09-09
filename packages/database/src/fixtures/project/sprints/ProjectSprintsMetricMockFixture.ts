export function generateProjectSprintsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
