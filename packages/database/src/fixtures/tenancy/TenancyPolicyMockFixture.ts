export function generateTenancyPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
