export function generateSupportSlaThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
