export function generateIntSlackTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
