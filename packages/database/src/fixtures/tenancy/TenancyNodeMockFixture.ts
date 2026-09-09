export function generateTenancyNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
