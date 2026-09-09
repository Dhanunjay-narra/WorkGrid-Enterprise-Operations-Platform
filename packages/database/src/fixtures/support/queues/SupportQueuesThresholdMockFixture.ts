export function generateSupportQueuesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
