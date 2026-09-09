export function generateTenancyPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "tenancy",
    entity: "TenancyPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
