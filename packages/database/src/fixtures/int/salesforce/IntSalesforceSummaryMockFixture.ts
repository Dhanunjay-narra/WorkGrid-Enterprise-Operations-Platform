export function generateIntSalesforceSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
