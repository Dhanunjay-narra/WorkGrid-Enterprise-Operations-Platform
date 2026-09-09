export function generateIntSalesforceMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
