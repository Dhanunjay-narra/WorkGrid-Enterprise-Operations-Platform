export function generateTenancySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
