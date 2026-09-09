export function generateAuthQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
