export function generateCommCallsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
