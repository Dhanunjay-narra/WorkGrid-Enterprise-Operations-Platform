export function generateIntSlackNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
