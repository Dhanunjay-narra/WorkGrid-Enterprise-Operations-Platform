export function generateIntSalesforceScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
