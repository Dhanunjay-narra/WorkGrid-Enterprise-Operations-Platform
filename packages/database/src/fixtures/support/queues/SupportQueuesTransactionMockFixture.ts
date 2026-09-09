export function generateSupportQueuesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
