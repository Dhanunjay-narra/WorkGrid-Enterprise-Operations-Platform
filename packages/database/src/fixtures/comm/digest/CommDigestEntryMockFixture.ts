export function generateCommDigestEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
