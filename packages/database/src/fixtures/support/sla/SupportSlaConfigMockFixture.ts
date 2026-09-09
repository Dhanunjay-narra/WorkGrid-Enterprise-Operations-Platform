export function generateSupportSlaConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
