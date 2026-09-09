export function generateIntOauthEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
