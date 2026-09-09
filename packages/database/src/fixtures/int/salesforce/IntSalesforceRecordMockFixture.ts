export function generateIntSalesforceRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
