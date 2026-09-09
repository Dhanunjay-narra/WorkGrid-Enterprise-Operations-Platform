export function generateSupportTicketsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
