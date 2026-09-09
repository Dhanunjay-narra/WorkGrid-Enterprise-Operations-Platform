export function generateRbacTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
