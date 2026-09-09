export function generateSupportTicketsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
