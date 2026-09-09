export function generateCommDigestItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
