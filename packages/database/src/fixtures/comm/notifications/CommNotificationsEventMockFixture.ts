export function generateCommNotificationsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
