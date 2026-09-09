export function generateSupportTicketsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
