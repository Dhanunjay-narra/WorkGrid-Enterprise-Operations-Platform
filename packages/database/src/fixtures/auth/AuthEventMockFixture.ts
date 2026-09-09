export function generateAuthEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
