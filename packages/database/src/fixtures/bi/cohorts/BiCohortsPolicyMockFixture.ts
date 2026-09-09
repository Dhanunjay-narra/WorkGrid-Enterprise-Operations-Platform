export function generateBiCohortsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
