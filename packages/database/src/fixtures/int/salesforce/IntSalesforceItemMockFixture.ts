export function generateIntSalesforceItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
