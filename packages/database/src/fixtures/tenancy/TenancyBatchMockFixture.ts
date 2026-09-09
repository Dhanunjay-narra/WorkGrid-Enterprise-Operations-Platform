export function generateTenancyBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
