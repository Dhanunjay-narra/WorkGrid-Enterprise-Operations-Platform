export function generateIdentityEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
