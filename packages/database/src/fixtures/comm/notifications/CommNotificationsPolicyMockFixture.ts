export function generateCommNotificationsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_notifications",
    entity: "CommNotificationsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
