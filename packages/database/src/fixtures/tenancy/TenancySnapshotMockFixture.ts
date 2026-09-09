export function generateTenancySnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancySnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
