export function generateCommDigestPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
