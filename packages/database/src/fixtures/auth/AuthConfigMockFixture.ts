export function generateAuthConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
