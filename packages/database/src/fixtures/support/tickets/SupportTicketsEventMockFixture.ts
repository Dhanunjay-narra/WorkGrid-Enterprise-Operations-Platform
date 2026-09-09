export function generateSupportTicketsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
