export function generateIntOauthQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
