export function generateSupportTicketsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
