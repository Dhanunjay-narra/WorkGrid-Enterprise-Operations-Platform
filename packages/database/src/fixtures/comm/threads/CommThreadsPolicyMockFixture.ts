export function generateCommThreadsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
