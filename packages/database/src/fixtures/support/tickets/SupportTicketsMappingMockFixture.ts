export function generateSupportTicketsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
