export function generateSupportTicketsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
