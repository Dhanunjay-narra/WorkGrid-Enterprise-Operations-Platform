export function generateBiKpisAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_kpis",
    entity: "BiKpisAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
