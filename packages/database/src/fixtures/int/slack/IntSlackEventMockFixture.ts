export function generateIntSlackEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
