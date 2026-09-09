export function generateBiWidgetsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_widgets",
    entity: "BiWidgetsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
