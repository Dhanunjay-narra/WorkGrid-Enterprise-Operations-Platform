export function generateIntOauthRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
