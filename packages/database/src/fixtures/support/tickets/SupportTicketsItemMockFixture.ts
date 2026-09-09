export function generateSupportTicketsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
