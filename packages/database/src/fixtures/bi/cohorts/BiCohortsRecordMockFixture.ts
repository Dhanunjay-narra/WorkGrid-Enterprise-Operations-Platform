export function generateBiCohortsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
