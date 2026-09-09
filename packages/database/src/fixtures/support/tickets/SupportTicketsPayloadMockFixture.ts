export function generateSupportTicketsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
