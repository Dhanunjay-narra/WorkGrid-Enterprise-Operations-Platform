export function generateIdentityPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
