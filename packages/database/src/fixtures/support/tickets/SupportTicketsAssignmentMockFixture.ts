export function generateSupportTicketsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
