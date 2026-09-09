export function generateTenancyEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
