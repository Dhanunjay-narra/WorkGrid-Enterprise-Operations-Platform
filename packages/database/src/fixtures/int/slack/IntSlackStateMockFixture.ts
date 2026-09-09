export function generateIntSlackStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
