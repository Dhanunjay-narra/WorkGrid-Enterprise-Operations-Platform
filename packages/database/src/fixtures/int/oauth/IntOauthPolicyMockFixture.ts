export function generateIntOauthPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
