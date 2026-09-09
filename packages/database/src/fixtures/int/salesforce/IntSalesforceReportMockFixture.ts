export function generateIntSalesforceReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
