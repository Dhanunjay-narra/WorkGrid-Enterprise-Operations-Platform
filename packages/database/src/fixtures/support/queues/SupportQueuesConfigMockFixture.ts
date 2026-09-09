export function generateSupportQueuesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
