export function generateRbacMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
