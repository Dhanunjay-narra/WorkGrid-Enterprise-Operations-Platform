export function generateBiCohortsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
