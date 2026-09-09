export function generateIntSalesforceProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
