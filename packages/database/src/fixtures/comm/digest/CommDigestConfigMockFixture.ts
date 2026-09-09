export function generateCommDigestConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
