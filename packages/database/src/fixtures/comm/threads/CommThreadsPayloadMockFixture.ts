export function generateCommThreadsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
