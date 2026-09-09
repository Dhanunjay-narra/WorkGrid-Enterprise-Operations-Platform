export function generateIntSlackProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
