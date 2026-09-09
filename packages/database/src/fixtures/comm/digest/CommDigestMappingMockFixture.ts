export function generateCommDigestMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
