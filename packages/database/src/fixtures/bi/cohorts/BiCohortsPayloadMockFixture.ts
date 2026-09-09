export function generateBiCohortsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
