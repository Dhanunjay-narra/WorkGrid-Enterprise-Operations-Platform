export function generateSupportTicketsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
