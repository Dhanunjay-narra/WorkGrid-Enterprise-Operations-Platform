export function generateRbacQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
