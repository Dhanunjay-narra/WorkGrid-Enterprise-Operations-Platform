export function generateCommNotificationsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
