export function generateIntStripeAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
