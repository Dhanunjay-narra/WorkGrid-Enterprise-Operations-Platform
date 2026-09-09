export function generateRbacSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
