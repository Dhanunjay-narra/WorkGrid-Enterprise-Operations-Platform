export function generateBiCohortsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
