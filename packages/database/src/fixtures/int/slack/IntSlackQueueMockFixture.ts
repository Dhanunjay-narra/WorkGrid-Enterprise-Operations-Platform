export function generateIntSlackQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
