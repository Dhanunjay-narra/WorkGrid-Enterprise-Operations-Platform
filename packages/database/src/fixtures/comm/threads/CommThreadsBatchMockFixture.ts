export function generateCommThreadsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
