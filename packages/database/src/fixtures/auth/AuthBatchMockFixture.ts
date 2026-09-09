export function generateAuthBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
