export function generateProjectRisksMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_risks",
    entity: "ProjectRisksMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
