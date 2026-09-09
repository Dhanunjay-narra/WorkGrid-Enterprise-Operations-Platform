export function generateIntSalesforceTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
