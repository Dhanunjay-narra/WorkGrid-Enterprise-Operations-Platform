export function generateSupportTicketsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
