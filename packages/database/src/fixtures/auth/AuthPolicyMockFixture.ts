export function generateAuthPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
