export function generateSupportCsatThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
