export function generateBiCohortsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
