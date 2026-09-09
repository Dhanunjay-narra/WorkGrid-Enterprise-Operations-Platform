export function generateTenancyTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
