export function generateCommDigestEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
