export function generateSupportTicketsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
