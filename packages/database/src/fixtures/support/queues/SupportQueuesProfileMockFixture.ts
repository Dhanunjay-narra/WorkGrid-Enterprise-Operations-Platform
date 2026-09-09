export function generateSupportQueuesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
