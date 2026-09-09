export function generateRbacSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
