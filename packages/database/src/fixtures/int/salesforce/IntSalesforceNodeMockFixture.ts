export function generateIntSalesforceNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
