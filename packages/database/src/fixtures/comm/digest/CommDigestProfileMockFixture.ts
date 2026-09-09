export function generateCommDigestProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
