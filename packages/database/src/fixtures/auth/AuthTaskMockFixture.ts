export function generateAuthTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "auth",
    entity: "AuthTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
