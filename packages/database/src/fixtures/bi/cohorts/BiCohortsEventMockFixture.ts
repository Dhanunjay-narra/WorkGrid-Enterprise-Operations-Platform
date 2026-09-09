export function generateBiCohortsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
