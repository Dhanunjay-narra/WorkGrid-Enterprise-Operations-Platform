export function generateBiCohortsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
