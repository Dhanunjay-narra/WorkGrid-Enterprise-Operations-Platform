export function generateCommCallsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
