export function generateTenancyMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
