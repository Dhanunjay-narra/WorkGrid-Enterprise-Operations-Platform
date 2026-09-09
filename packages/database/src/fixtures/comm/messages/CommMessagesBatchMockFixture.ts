export function generateCommMessagesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_messages",
    entity: "CommMessagesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
