export function generateBiCohortsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
