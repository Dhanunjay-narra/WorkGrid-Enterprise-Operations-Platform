export function generateCommCallsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
