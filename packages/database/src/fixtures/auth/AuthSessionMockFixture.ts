export function generateAuthSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
