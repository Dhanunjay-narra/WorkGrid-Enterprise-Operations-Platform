export function generateIntSalesforcePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforcePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
