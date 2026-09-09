export function generateIntSalesforceThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
