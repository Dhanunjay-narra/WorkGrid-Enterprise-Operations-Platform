export function generateIntOauthProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
