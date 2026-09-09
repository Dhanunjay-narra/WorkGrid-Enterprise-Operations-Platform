export function generateSupportEscalationProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_escalation",
    entity: "SupportEscalationProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
