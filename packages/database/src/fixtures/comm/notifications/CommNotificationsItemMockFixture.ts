export function generateCommNotificationsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
