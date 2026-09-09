export function generateIntSlackPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
