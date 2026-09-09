export function generateCommThreadsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
