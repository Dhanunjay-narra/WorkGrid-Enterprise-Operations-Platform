export function generateRbacRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
