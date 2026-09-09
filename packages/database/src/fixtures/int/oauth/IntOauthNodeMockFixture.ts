export function generateIntOauthNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
