export function generateSupportTicketsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
