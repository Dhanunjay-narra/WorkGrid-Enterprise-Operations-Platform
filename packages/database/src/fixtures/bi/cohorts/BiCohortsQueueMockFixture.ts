export function generateBiCohortsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
