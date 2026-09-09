export function generateIntSalesforceSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
