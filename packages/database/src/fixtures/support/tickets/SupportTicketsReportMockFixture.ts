export function generateSupportTicketsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
