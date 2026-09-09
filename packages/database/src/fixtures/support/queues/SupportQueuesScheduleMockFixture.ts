export function generateSupportQueuesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
