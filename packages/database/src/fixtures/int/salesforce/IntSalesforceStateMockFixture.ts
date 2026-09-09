export function generateIntSalesforceStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
