export function generateCommCallsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
