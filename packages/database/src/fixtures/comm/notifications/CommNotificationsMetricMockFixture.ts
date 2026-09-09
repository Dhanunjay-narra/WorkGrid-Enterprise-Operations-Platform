export function generateCommNotificationsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
