export function generateIntOauthTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_oauth",
    entity: "IntOauthTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
