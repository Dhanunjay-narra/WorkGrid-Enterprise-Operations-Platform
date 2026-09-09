export function generateSupportSlaQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
