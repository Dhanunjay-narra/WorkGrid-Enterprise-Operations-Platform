export function generateIntSalesforceBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
