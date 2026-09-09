export function generateTenancyScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
