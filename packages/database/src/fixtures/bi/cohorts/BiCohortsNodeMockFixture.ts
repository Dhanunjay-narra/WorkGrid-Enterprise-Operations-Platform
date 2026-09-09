export function generateBiCohortsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
