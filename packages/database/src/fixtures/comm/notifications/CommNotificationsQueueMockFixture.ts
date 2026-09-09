export function generateCommNotificationsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
