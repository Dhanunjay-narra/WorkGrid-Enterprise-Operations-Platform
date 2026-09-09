export function generateSupportTicketsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
