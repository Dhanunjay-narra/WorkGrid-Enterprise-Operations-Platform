export function generateBiCohortsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
