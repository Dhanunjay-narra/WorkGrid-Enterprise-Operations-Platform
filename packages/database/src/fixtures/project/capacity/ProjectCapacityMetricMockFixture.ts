export function generateProjectCapacityMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
