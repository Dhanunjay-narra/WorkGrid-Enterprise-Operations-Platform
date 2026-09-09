export function generateSupportCsatPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
