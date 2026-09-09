export function generateTenancyRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
