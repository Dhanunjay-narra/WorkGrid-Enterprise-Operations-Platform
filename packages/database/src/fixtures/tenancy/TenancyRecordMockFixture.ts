export function generateTenancyRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
