export function generateIntSlackSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
