export function generateSupportTicketsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
