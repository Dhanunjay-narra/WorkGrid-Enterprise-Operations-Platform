export function generateAuthPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
