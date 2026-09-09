export function generateBiCohortsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
