export function generateRbacProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
