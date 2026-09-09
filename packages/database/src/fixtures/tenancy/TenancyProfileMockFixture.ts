export function generateTenancyProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
