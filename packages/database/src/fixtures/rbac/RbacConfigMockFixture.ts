export function generateRbacConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
