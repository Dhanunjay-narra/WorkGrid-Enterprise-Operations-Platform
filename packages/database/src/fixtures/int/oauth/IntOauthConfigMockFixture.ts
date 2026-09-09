export function generateIntOauthConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
