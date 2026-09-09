export function generateTenancyItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
