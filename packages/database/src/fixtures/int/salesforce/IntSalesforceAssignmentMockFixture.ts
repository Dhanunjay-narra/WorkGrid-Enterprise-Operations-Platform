export function generateIntSalesforceAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
