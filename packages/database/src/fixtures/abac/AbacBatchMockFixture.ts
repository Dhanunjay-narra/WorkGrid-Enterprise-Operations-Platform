export function generateAbacBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
