export function generateSupportCsatEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
