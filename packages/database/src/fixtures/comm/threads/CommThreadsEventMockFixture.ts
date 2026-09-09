export function generateCommThreadsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
