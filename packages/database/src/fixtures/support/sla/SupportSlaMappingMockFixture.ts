export function generateSupportSlaMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
