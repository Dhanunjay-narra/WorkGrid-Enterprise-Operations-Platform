export function generateRbacPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
