export function generateSupportTicketsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
