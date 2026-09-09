export function generateCommThreadsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
