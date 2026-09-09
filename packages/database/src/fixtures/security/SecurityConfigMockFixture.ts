export function generateSecurityConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
