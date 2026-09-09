export function generateBiCohortsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
