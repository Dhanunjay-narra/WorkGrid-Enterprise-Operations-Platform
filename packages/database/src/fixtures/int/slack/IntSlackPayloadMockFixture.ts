export function generateIntSlackPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
