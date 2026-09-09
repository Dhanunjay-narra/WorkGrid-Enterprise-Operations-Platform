export function generateTenancyStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
