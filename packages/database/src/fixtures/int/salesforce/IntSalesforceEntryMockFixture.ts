export function generateIntSalesforceEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
