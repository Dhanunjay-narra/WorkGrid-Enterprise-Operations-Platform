export function generateSupportTicketsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
