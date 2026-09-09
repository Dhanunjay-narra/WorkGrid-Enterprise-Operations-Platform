export function generateRbacSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
