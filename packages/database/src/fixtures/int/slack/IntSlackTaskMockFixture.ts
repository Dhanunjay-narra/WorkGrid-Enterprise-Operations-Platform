export function generateIntSlackTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
