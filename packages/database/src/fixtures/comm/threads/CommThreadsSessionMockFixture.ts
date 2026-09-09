export function generateCommThreadsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
