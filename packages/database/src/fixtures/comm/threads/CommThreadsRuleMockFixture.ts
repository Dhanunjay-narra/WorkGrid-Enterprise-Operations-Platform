export function generateCommThreadsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
