export function generateSupportQueuesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_queues",
    entity: "SupportQueuesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
