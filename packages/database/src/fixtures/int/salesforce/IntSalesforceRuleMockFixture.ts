export function generateIntSalesforceRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
