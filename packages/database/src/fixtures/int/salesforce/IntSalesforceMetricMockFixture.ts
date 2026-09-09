export function generateIntSalesforceMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
