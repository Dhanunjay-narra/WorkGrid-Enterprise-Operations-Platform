export function generateBiCohortsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
