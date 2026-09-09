export function generateSupportTicketsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
