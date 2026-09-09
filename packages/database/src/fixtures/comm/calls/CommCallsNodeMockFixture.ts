export function generateCommCallsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
