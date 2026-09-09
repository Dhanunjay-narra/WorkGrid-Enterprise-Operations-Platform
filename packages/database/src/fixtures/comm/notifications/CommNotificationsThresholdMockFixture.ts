export function generateCommNotificationsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
