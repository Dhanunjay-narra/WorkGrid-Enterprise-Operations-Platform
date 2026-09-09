export function generateIntSalesforceConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
