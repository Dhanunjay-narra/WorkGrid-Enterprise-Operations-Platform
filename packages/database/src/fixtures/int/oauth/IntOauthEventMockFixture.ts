export function generateIntOauthEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
