export function generateIntSlackConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
