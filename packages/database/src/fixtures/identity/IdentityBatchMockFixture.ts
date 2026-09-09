export function generateIdentityBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
