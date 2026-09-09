export function generateRbacEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
