export function generateSupportTicketsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
