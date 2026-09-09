export function generateCommThreadsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
