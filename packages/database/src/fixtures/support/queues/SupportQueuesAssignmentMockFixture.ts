export function generateSupportQueuesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
