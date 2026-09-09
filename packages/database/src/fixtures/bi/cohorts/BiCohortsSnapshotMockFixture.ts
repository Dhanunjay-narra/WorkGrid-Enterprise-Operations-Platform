export function generateBiCohortsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
