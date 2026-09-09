export function generateIntOauthPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
