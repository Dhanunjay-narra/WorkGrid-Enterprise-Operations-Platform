export function generateTenancyQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
