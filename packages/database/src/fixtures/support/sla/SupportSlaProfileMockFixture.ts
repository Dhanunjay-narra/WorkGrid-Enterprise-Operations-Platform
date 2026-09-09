export function generateSupportSlaProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
