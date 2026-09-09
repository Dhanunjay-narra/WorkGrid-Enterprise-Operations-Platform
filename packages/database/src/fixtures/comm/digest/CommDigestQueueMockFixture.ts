export function generateCommDigestQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
