export function generateRbacItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
