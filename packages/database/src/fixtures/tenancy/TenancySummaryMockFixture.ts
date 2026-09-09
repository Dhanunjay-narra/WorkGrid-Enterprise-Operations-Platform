export function generateTenancySummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancySummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
