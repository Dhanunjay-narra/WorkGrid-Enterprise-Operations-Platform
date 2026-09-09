export function generateRbacStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
