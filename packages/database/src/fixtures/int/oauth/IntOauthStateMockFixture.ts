export function generateIntOauthStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
