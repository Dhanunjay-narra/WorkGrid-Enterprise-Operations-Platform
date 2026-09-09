export function generateIntOauthMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
