export function generateIntSlackEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
