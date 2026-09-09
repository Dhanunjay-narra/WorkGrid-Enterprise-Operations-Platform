export function generateSupportTicketsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_tickets",
    entity: "SupportTicketsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
