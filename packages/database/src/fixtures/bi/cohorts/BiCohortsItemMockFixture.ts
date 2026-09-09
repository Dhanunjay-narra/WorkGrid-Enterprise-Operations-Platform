export function generateBiCohortsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
