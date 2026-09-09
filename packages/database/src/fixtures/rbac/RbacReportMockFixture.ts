export function generateRbacReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
