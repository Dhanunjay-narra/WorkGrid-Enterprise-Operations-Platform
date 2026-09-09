export function generateRbacRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
