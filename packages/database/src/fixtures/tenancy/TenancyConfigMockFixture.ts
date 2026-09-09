export function generateTenancyConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
