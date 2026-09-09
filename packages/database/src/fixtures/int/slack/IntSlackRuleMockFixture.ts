export function generateIntSlackRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
