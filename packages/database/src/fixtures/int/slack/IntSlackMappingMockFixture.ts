export function generateIntSlackMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
