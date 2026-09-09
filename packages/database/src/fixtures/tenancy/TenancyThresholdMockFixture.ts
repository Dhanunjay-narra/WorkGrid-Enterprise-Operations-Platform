export function generateTenancyThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
