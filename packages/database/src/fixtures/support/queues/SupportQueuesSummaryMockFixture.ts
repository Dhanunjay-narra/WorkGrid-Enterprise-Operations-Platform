export function generateSupportQueuesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
