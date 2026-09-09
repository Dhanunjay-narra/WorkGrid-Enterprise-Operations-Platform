export function generateBiCohortsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
