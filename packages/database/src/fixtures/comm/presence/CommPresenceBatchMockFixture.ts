export function generateCommPresenceBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_presence",
    entity: "CommPresenceBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
