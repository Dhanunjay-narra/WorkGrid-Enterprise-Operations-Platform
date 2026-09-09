export function generateBiCohortsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
