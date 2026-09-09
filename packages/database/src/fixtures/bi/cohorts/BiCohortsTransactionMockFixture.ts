export function generateBiCohortsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
