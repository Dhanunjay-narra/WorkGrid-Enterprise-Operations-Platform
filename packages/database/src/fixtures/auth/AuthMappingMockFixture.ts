export function generateAuthMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
