export function generateBiCohortsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
