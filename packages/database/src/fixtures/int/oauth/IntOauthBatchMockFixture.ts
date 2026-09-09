export function generateIntOauthBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
