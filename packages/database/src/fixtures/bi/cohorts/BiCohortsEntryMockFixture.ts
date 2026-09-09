export function generateBiCohortsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
