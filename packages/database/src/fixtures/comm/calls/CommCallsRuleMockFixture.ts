export function generateCommCallsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
