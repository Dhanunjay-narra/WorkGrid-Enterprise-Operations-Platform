export function generateSupportTicketsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
