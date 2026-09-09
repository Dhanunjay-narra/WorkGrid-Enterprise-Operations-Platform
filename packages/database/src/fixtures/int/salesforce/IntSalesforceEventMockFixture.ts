export function generateIntSalesforceEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
