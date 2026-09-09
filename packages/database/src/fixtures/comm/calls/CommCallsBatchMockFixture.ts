export function generateCommCallsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
