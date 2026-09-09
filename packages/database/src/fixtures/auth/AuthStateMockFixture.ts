export function generateAuthStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
