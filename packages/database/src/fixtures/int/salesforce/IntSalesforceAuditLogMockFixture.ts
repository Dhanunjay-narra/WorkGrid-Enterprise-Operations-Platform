export function generateIntSalesforceAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_salesforce",
    entity: "IntSalesforceAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
