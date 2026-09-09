export function generateCommNotificationsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
