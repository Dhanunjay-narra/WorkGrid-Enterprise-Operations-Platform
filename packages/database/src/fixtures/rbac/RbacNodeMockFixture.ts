export function generateRbacNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
