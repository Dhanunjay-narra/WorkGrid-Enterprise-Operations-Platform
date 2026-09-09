export function generateSupportTicketsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
