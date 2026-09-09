export function generateCommNotificationsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
