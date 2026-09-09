export function generateCommCallsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
