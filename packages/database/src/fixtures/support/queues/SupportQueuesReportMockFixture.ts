export function generateSupportQueuesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
