export function generateIntSalesforceTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
