export function generateBiCohortsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
