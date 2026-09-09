export function generateIntOauthSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
