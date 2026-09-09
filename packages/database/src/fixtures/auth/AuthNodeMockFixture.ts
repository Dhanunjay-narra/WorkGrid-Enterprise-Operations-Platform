export function generateAuthNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
