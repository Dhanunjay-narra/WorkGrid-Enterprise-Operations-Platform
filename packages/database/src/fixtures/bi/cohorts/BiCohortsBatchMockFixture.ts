export function generateBiCohortsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
