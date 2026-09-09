export function generateCommCallsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
