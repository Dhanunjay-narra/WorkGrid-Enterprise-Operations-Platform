export function generateIntSalesforceSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
