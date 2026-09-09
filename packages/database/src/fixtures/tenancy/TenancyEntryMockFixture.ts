export function generateTenancyEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
