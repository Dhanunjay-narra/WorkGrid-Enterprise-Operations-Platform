export function generateProjectEpicsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
