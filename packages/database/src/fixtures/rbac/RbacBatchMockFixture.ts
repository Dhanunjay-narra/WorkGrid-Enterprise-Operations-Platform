export function generateRbacBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
