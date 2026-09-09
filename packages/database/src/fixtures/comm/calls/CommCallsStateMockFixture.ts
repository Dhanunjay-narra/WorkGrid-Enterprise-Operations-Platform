export function generateCommCallsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
