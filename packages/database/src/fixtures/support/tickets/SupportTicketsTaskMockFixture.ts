export function generateSupportTicketsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
