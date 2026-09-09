export function generateRbacEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
