export function generateIdentityTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
