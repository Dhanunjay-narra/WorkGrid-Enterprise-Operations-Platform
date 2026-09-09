export function generateCommNotificationsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
