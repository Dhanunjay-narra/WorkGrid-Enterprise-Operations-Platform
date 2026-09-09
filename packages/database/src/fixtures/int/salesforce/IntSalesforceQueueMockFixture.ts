export function generateIntSalesforceQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
