export function generateTenancyReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
