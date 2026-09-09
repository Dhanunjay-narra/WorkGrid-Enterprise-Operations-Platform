export function generateIntSlackBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
