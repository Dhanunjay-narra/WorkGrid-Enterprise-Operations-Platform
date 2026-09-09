export function generateBiExportsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_exports",
    entity: "BiExportsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
