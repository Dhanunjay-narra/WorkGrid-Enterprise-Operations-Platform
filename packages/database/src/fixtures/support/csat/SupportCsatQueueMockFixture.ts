export function generateSupportCsatQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
