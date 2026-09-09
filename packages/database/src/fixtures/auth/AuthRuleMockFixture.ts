export function generateAuthRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
