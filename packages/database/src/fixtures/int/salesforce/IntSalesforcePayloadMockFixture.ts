export function generateIntSalesforcePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforcePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
